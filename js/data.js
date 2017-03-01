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
	database.flights = {};
	$.getJSON('https://api.flightstats.com/flex/flightstatus/rest/v2/json/flightsNear/51.5074/0.1278/20?appId=1ce57a01&appKey=dcaf7b444da5f530573b82ee0cdb5e36&maxFlights=5&sourceType=derived').then(function(data){
		console.log('Received flights data', data);
		database.flights = data;
	})
}