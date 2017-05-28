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
  $('#planes').append('<a target="_blank" href="http://www.flightstats.com/go/FlightTracker/flightTracker.do?id=' + flight.flightId + '" class="airplane airplane' + (++UI.airplainCounter) + '" style="-webkit-animation:' + dir + ' ' + Math.ceil(10 + (Math.random() * 150)) + 's linear infinite; margin-top:' + (Math.random() * (window.innerHeight - 400)) + 'px" id="' + flight.flightId + '"><span>' + flight.depart + ' to ' + flight.arrive + '</span></a>');
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

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
  //     if(e.keyCode === 38) {
  //   scrollToPrevious();
  // } else if(e.keyCode === 40) {
  //   scrollToNext();
  // }
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

function scrollToEl(element) {

  $('html, body').animate({
    scrollTop: $('#' + element).offset().top
  }, 2000);
  setTimeout(function(){
    $('a.right[href="#carousel-'+element+'"]').focus();
  },2000);
}

var sections = ['page-top', 'sky', 'ground', 'underground'];
var currentSection = 0;

function scrollToPrevious() {
  $('a.down').show();
  if(currentSection > 0) {
    currentSection--;
    $('a.up').show();
  } else {
    currentSection = 0;
    $('a.up').hide();
  }
  scrollToEl(sections[currentSection]);
}
function scrollToNext() {
  $('a.up').show();
  if(currentSection < sections.length-1) {
    currentSection++;
    $('a.down').show();
  } else {
    currentSection = sections.length-1;
    $('a.down').hide();
  }
  scrollToEl(sections[currentSection]);
}
$(document).ready(function() {

  // $(this).scrollTop(0);

  $('a.up').hide();

  // $('.page-scroll').unbind('click');
  // $('.page-scroll').on('click', function(e) {
  //   e.preventDefault();
  //   return false;
  // });
  $('a.up').click(function(e) {
    e.preventDefault();
    scrollToPrevious();
  });
  $('a.down').click(function(e) {
    e.preventDefault();
    scrollToNext();
  });

  // mapboxgl.accessToken = 'pk.eyJ1IjoiZGFucGF1bHNtaXRoIiwiYSI6ImNpeXc4NXU5ZDAwMDMzMm9lZmd4ZTFmZmQifQ.Nl9itu3jhaFTlhrV92LS0g';
  UI.resizeSubsections();
  $(window).smartresize(function() {
    UI.resizeSubsections();
  });
  $('.carousel').carousel();
  $('.carousel').on('slide.bs.carousel', function(e) {
    // console.log('Ground layer sub-section: ', $(e.relatedTarget).eq(0).attr('id'));
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
  // UI.bikebusInitialize();
  $('iframe.storyofinstagram').height(window.innerHeight - 110);
  $('iframe.bus-bike-iframe').height(window.innerHeight - 110);
  $('iframe.layout-try').height(window.innerHeight - 110);
  $('table#cityStatsTable').width(window.innerWidth);
  $('div.map0').height(window.innerHeight - 110);
  $('div.map1').height(window.innerHeight - 110);
  $('iframe.landprice-iframe').height(window.innerHeight - 110);
  $('#lights').click(function(){
    console.log('here', $('.revealviz iframe').hasClass('hidden'));
    $('.revealviz iframe').toggleClass('hidden');
    $('.revealviz img.revealed').toggleClass('hidden');
    if($('.revealviz iframe').hasClass('hidden')) {
      $(this).text('turn the lights off');
    } else {
      $(this).text('turn the lights on');      
    }
  });
  $('.tooltipster').tooltipster({
    theme: 'tooltipster-borderless',
    maxWidth: 300
  });
  disableScroll();

});

// document.getElementById("enable").onclick = function() {
//   enableScroll();
//   document.getElementById("status").innerHTML = "enabled";
//     document.getElementById("status").className = "enabled";
// };

// document.getElementById("disable").onclick = function() {
//   disableScroll();
//   document.getElementById("status").innerHTML = "disabled";
//   document.getElementById("status").className = "disabled";
// };
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
