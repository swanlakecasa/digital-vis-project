// Swan Lake CASA
// 2017
// Digital Visualisation Project

var DATA = {};

$.ajaxSetup({
    cache: false
});

// WEATHER
// https://openweathermap.org/
DATA.getWeather = function() {
	DATA.weather = {};
	$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/2c462647a4abb6a3d74a5ca240018004/51.5074,0.1278').then(function(data){
		console.log('Received weather data', data);
		DATA.weather = data;
	})
};
// FLIGHTS
// https://developer.flightstats.com
DATA.getFlights = function(onComplete) {
	
	var numberOfFlights = 5;
	var mileRadius = 50;
	DATA.flights = [];
	DATA.flightsProcessed = 0;
	
	function checkIfFinished() {
		if(DATA.flightsProcessed == DATA.flights.length) {
			console.log('processed all flights');
			onComplete(DATA.flights);
		}
	}

	$.getJSON('https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flightsNear/51.5074/0.1278/'+mileRadius+'?appId=5e50da44&appKey=6caa60485b431970a7624da0a73dd065&maxFlights='+numberOfFlights+'&sourceType=raw&callback=?').then(function(data){
		console.log('Received flights data', data);
		DATA.flights = data.flightPositions;
		_.each(DATA.flights, function(flight){
			// console.log('flight', flight);
			if(flight.flightId) {
				DATA.getFlightDetails(flight, checkIfFinished);
			}
		});

	})
};
DATA.getFlightDetails = function(flight, onComplete) {
	var url = 'https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/track/'+flight.flightId+'?appId=1ce57a01&appKey=dcaf7b444da5f530573b82ee0cdb5e36&includeFlightPlan=false&maxPositions=1'
	
	$.getJSON(url).then(function(data){
		var airports = data.appendix.airports;
		var map = {};
		_.each(airports, function(airport) {
			map[airport.fs] = airport.city;
		});
		flight.depart = map[data.flightTrack.departureAirportFsCode];
		flight.arrive = map[data.flightTrack.arrivalAirportFsCode];
		console.log('Flight '+flight.flightId+', '+flight.depart+' to '+flight.arrive);
		DATA.flightsProcessed++;
		onComplete();
	}, function() {
		DATA.flightsProcessed++;
		onComplete();
	});
};
// BUS API
DATA.getBusStatus = function(onComplete){
	$.getJSON('https://api.tfl.gov.uk/line/mode/bus/status').then(function(data){
		console.log('Bus status data received', data);
		DATA.buses = data;
		onComplete();
	});
};
// TUBE API
DATA.getTubeStatus = function(onComplete){
	$.getJSON('https://api.tfl.gov.uk/line/mode/tube/status').then(function(data){
		console.log('Tube status data received', data);
		DATA.tubes = data;
		onComplete();
	});
};

