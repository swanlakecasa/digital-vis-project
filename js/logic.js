// Swan Lake CASA
// 2017
// Digital Visualisation Project

// The flow of actions for our project

// Will get weather data
DATA.getWeather(UI.drawWeather);
// Will get flights data and then draw those flights
// It passess the UI.drawAirplanes function to the 
// DATA.getFlights() function to be called once it has 
// finished getting the data.
DATA.getFlights(UI.drawAirplanes);
DATA.getBusStatus(UI.drawBuses);
DATA.getTubeStatus(UI.drawTubeLines);

// UI.drawGoogleTubeMap();