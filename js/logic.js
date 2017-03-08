// The flow of actions for our project

// Will get weather data
DATA.getWeather();
// Will get flights data and then draw those flights
// It passess the UI.drawAirplanes function to the 
// DATA.getFlights() function to be called once it has 
// finished getting the data.
DATA.getFlights(UI.drawAirplanes);
DATA.getTubeStatus();
DATA.getBusStatus();

// UI.drawGoogleTubeMap();