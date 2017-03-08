var UI = {};

UI.airplainCounter = 0;
UI.drawAirplanes = function(flights) {
  var flight = flights.shift();
  if (flight) {
    console.log('UI.drawAirplanes: ', flight.depart, flight.arrive);
    if (flight.depart === "London" || flight.arrive === "London") {
      UI.drawAirplane(flight);
    }
  }
  setTimeout(function() {
    UI.drawAirplanes(flights);
  }, Math.ceil(1000 + (Math.random() * 10000)));
};
UI.drawAirplane = function(flight) {
  var dir;
  if (UI.airplainCounter == 4) UI.airplainCounter = 0;
  if (UI.airplainCounter == 0 || UI.airplainCounter == 1) {
    dir = 'airplaneLeft';
  } else {
    dir = 'airplaneRight';
  }
  $('#sky').append('<a target="_blank" href="http://www.flightstats.com/go/FlightTracker/flightTracker.do?id=' + flight.flightId + '" class="airplane airplane' + (++UI.airplainCounter) + '" style="-webkit-animation:' + dir + ' ' + Math.ceil(10 + (Math.random() * 150)) + 's linear infinite; margin-top:' + (Math.random() * (window.innerHeight - 200)) + 'px" id="' + flight.flightId + '"><span>' + flight.depart + ' to ' + flight.arrive + '</span></a>');
};
UI.drawBuses = function() {
  _.each(DATA.buses, function(bus) {
    $('#transport .buses').append('<div class="bus bus-' + bus.id + '" target="_blank" href="" data-toggle="tooltip" data-placement="top" title="' + bus.name + '"><span>' + bus.name + '</span></div>');
  });
  // var busIndex = 1;
  // _.each(DATA.buses, function(bus){
  // 	$('#transport .buses').append('<div class="bus bus-'+bus.id+'" target="_blank" href="" style="margin-right:'+(busIndex*60)+'px;"><span>'+bus.name+'</span></div>');
  // 	busIndex++;
  // });

};
UI.drawTubeLines = function() {
  _.each(DATA.tubes, function(tube) {
    $('#deepUnderground .tubes').append('<div class="tube tube-' + tube.name.replace(/&/g, 'and').replace(/ /g, '-') + '" target="_blank" href="" ><span>' + tube.name + ' - ' + tube.lineStatuses[0].statusSeverityDescription + '</span></div>');
  });
};
UI.drawGoogleTubeMap = function() {
  console.log('UI.drawGoogleTubeMap');
  var map = new google.maps.Map(document.getElementById('googleTubeMap'), {
    zoom: 13,
    center: {lat: 51.501904, lng: -0.115871}
  });
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
  $('#googleTubeMap').height(window.innerHeight);
}
UI.resizeSubsections = function() {
  $('.sub-section').height(window.innerHeight);
};
$(document).ready(function() {
  UI.resizeSubsections();
  $(window).smartresize(function() {
    UI.resizeSubsections();
  });
  $('.carousel').carousel();
  $('.carousel').on('slide.bs.carousel', function (e) {
    console.log('Ground layer sub-section: ', $(this).find('.item.active').find('h3').text(), e);
  });
});
