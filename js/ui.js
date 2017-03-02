var UI = {};
UI.airplainCounter = 0;
UI.drawAirplanes = function(flights) {
	var flight = flights.shift();
	if(flight) {
		console.log(flight.depart, flight.arrive)
		if(flight.depart === "London" || flight.arrive === "London") {
	 		UI.drawAirplane(flight);
	 	}
	 }
	setTimeout(function(){
		UI.drawAirplanes(flights);
	}, Math.ceil(1000+(Math.random()*10000)));
};
UI.drawAirplane = function(flight) {
	var dir;
	if(UI.airplainCounter==4) UI.airplainCounter = 0;
	if(UI.airplainCounter==0 || UI.airplainCounter==1) {
		dir = 'airplaneLeft';
	} else {
		dir = 'airplaneRight';
	}
	$('#sky').append('<a target="_blank" href="http://www.flightstats.com/go/FlightTracker/flightTracker.do?id='+flight.flightId+'" class="airplane airplane'+(++UI.airplainCounter)+'" style="-webkit-animation:'+dir+' '+Math.ceil(100+(Math.random()*300))+'s linear infinite; margin-top:'+(Math.random()*(window.innerHeight-200))+'px" id="'+flight.flightId+'"><span>'+flight.depart+' to '+flight.arrive+'</span></a>');
}

$(document).ready(function(){
	// $(document).on('click', '.airplane', function(){

	// })
})
