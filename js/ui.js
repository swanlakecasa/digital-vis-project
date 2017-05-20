// Swan Lake CASA
// 2017
// Digital Visualisation Project

var UI = {};

UI.drawWeather = function() {
  console.log('Weather: ', DATA.weather.currently.icon);
};

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
  //  $('#transport .buses').append('<div class="bus bus-'+bus.id+'" target="_blank" href="" style="margin-right:'+(busIndex*60)+'px;"><span>'+bus.name+'</span></div>');
  //  busIndex++;
  // });

};
UI.drawTubeLines = function() {
  _.each(DATA.tubes, function(tube) {
    $('#deepUnderground .tubes').append('<div class="tube tube-' + tube.name.replace(/&/g, 'and').replace(/ /g, '-') + '" target="_blank" href="" ><span>' + tube.name + ' - ' + tube.lineStatuses[0].statusSeverityDescription + '</span></div>');
  });
};
UI.drawGoogleTubeMap = function() {
  console.log('drawing google map');
  var map = new google.maps.Map(document.getElementById('googleTubeMap'), {
    zoom: 13,
    center: { lat: 51.501904, lng: -0.115871 }
  });

  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
  $('#googleTubeMap').height(window.innerHeight);
  UI.resizeSubsections();
  UI.googleTubeMapDrawn = true;
};
UI.resizeSubsections = function() {
  $('.sub-section').height(window.innerHeight);
};
UI.bikebusInitialize = function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoibGlzYXNhc2FzYSIsImEiOiJjajJndjhmdHEwMDBoMzNtdnF0MjNvYjV1In0.LK1-VqSfhFRIEs8yvpmu8Q';

  var beforeMap = new mapboxgl.Map({
    container: 'before',
    style: 'mapbox://styles/lisasasasa/cj2j7o38b001o2rmucu9ixplr',
    center: [-0.1484, 51.5029],
    zoom: 10
  });

  var afterMap = new mapboxgl.Map({
    container: 'after',
    style: 'mapbox://styles/lisasasasa/cj2jmhyju00012rnznsqb3xli',
    center: [-0.1484, 51.5029],
    zoom: 10
  });

  var beforeMap1 = new mapboxgl.Map({
    container: 'before1',
    style: 'mapbox://styles/lisasasasa/cj2ivxtkc00392sru43bxmyt8',
    center: [116.494, 39.912],
    zoom: 10
  });

  var afterMap1 = new mapboxgl.Map({
    container: 'after1',
    style: 'mapbox://styles/lisasasasa/cj2t86olc001e2ss248dtywdz',
    center: [116.494, 39.912],
    zoom: 10
  });

  var map0 = new mapboxgl.Compare(beforeMap, afterMap, {
    // Set this to enable comparing two maps by mouse movement:
    // mousemove: true
  });
  var map1 = new mapboxgl.Compare(beforeMap1, afterMap1, {
    // Set this to enable comparing two maps by mouse movement:
    // mousemove: true
  });
}
$(document).ready(function() {
  // mapboxgl.accessToken = 'pk.eyJ1IjoiZGFucGF1bHNtaXRoIiwiYSI6ImNpeXc4NXU5ZDAwMDMzMm9lZmd4ZTFmZmQifQ.Nl9itu3jhaFTlhrV92LS0g';
  UI.resizeSubsections();
  $(window).smartresize(function() {
    UI.resizeSubsections();
  });
  $('.carousel').carousel();
  $('.carousel').on('slide.bs.carousel', function(e) {
    console.log('Ground layer sub-section: ', $(e.relatedTarget).eq(0).attr('id'));
    // if($(e.relatedTarget).eq(0).attr('id') === 'transport') {
    //   if(!UI.googleTubeMapDrawn) {
    //     UI.drawGoogleTubeMap();
    //   }
    // }
  });
  $('input.slider').change(function() {
    $('img.gif').removeClass('active');
    if (parseInt($(this).val()) === 0) {
      $('img.gif.2008').addClass('active');
    }
    if (parseInt($(this).val()) === 1) {
      $('img.gif.2011').addClass('active');
    }
    if (parseInt($(this).val()) === 2) {
      $('img.gif.2015').addClass('active');
    }
  });
  UI.bikebusInitialize();
  $('iframe.storyofinstagram').height(window.innerHeight - 110);
  $('iframe.bus-bike-iframe').height(window.innerHeight - 110);
  $('table#cityStatsTable').width(window.innerWidth - 410);
  $('div.map0').height(window.innerHeight - 160);
  $('div.map1').height(window.innerHeight - 160);
  $('iframe.landprice-iframe').height(window.innerHeight - 160);
});
