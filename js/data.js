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
  $.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/2c462647a4abb6a3d74a5ca240018004/51.5074,0.1278').then(function(data) {
    console.log('Received weather data', data);
    DATA.weather = data;
  })
};
// FLIGHTS
// https://developer.flightstats.com
// var fsApp = 'c38a8af3';
// var fsKey = 'c00d66db3f621109ef786b2946a0f8da';
DATA.getFlights = function(onComplete) {

  var numberOfFlights = 5;
  var mileRadius = 50;
  DATA.flights = [];
  DATA.flightsProcessed = 0;

  function checkIfFinished() {
    if (DATA.flightsProcessed == DATA.flights.length) {
      console.log('processed all flights');
      onComplete(DATA.flights);
    }
  }

  
  $.getJSON('https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flightsNear/51.5074/0.1278/' + mileRadius + '?appId='+fsApp+'&appKey='+fsKey+'&maxFlights=' + numberOfFlights + '&sourceType=raw').success(function(data) {
    console.log('Received flights data', data);
    DATA.flights = data.flightPositions;
    _.each(DATA.flights, function(flight) {
      // console.log('flight', flight);
      if (flight.flightId) {
        DATA.getFlightDetails(flight, checkIfFinished);
      }
    });
  }, function() {
    console.log('Did not receive flights data', data);
    DATA.flights = [{
      flightId: 1
    }, {
      flightId: 2
    }, {
      flightId: 3
    }, {
      flightId: 4
    }, {
      flightId: 5
    }];
    _.each(DATA.flights, function(flight) {
      // console.log('flight', flight);
      if (flight.flightId) {
        DATA.getFlightDetails(flight, checkIfFinished);
      }

    });

  });
}
DATA.getFlightDetails = function(flight, onComplete) {
  var url = 'https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/track/' + flight.flightId + '?appId='+fsApp+'&appKey='+fsKey+'&includeFlightPlan=false&maxPositions=1'

  $.getJSON(url).success(function(data) {
    if (data.error && data.error.errorCode === 'AUTH_FAILURE') {
      console.log('no flight details');
      var airports = [{ fs: 'MAD', city: 'Madrid' }, { fs: 'FRA', city: 'Frankfurt' }, { fs: 'LDN', city: 'London' }, { fs: 'PAR', city: 'Paris' }, { fs: 'DBN', city: 'Dublin' }, { fs: 'PEX', city: 'Beijing' }];
      var data = [{
        flightTrack: {
          departureAirportFsCode: 'PAR',
          arrivalAirportFsCode: 'LDN'
        }
      }, {
        flightTrack: {
          departureAirportFsCode: 'LDN',
          arrivalAirportFsCode: 'DBN'
        }
      }, {
        flightTrack: {
          departureAirportFsCode: 'LDN',
          arrivalAirportFsCode: 'PEX'
        }
      }, {
        flightTrack: {
          departureAirportFsCode: 'LDN',
          arrivalAirportFsCode: 'MAD'
        }
      }, {
        flightTrack: {
          departureAirportFsCode: 'FRA',
          arrivalAirportFsCode: 'LDN'
        }
      }]
      var map = {};
      _.each(airports, function(airport) {
        map[airport.fs] = airport.city;
      });
      var num = Math.floor(Math.random()*3);
      flight.depart = map[data[num].flightTrack.departureAirportFsCode];
      flight.arrive = map[data[num].flightTrack.arrivalAirportFsCode];
      console.log('Flight ' + flight.flightId + ', ' + flight.depart + ' to ' + flight.arrive);
      DATA.flightsProcessed++;
      onComplete();
    } else {
      var airports = data.appendix.airports;
      var map = {};
      _.each(airports, function(airport) {
        map[airport.fs] = airport.city;
      });
      flight.depart = map[data.flightTrack.departureAirportFsCode];
      flight.arrive = map[data.flightTrack.arrivalAirportFsCode];
      console.log('Flight ' + flight.flightId + ', ' + flight.depart + ' to ' + flight.arrive);
      DATA.flightsProcessed++;
      onComplete();
    }
  }).error(function() {

  });
};
// BUS API
DATA.getBusStatus = function(onComplete) {
  // $.getJSON('https://api.tfl.gov.uk/line/mode/bus/status').then(function(data) {
  //   console.log('Bus status data received', data);
  //   DATA.buses = data;
  //   onComplete();
  // });
};
// TUBE API
DATA.getTubeStatus = function(onComplete) {
  // $.getJSON('https://api.tfl.gov.uk/line/mode/tube/status').then(function(data) {
  //   console.log('Tube status data received', data);
  //   DATA.tubes = data;
  //   onComplete();
  // });
};
