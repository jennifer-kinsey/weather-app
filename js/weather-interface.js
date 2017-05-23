var Weather = require('./../js/weather.js').weatherModule;

var displayDescription = function(city, descriptionData) {
  $('.showDescription').text("You can expect " + descriptionData + " today in " + city);
}

var displayTemperatures = function(city, currentTemp) {
  $('.showTemperatures').text("The current temperature is " + currentTemp + "\u2109.");
}

var displayHumidity = function(city, humidityData) {
  $('.showHumidity').text("The humidity is " + humidityData + "%.");
}

var displaySunrise = function(city, sunriseData) {
  $('.showSunrise').text("The sun rises at " + sunriseData + " PST.")
}

var displaySunset = function(city, sunsetData) {
  $('.showSunset').text("The sun sets at " + sunsetData + " PST.")
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getHumidity(city, displayHumidity);
    currentWeatherObject.getDescription(city, displayDescription);
    currentWeatherObject.getTemperatures(city, displayTemperatures);
    currentWeatherObject.getSunrise(city, displaySunrise);
    currentWeatherObject.getSunset(city, displaySunset);
  });
});
