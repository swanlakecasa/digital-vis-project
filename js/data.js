$.ajaxSetup({
    cache: false
});

var database = {};

// WEATHER
// https://openweathermap.org/
function getWeather() {
	database.weather = {};
	$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=6ed3aee5ec9f68cc29928a132686008f').then(function(data){
		console.log('Received weather data', data);
		database.weather = data;
	})
}

// FLIGHTS
// https://developer.flightstats.com
function getFlights() {
	
	var numberOfFlights = 5;
	var mileRadius = 50;
	database.flights = [];
	database.flightsProcessed = 0;
	
	var onComplete = function() {
		if(database.flightsProcessed == database.flights.length) {
			console.log('processed all flights');
			UI.drawAirplanes(database.flights);	
		}
	};

	$.getJSON('https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flightsNear/51.5074/0.1278/'+mileRadius+'?appId=1ce57a01&appKey=dcaf7b444da5f530573b82ee0cdb5e36&maxFlights='+numberOfFlights+'&sourceType=raw&callback=?').then(function(data){
		console.log('Received flights data', data);
		database.flights = data.flightPositions;
		_.each(database.flights, function(flight){
			// console.log('flight', flight);
			if(flight.flightId) {
				getFlightDetails(flight, onComplete);
			}
		});

	})
}
function getFlightDetails(flight, callback) {
	var url = 'http://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/track/'+flight.flightId+'?appId=1ce57a01&appKey=dcaf7b444da5f530573b82ee0cdb5e36&includeFlightPlan=false&maxPositions=1'
	
	$.getJSON(url).then(function(data){
		var airports = data.appendix.airports;
		var map = {};
		_.each(airports, function(airport) {
			map[airport.fs] = airport.city;
		});
		flight.depart = map[data.flightTrack.departureAirportFsCode];
		flight.arrive = map[data.flightTrack.arrivalAirportFsCode];
		console.log('Flight '+flight.flightId+', '+flight.depart+' to '+flight.arrive);
		database.flightsProcessed++;
		callback();
	}, function() {
		database.flightsProcessed++;
		callback();
	});
}


