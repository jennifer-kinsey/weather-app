var Weather = require('./../js/weather.js').weatherModule;

var displayDescription = function(city, descriptionData) {
  $('.showDescription').text("You can expect " + descriptionData + " today in " + city);
}

var displayTemperatures = function(city, currentTemp) {
  $('.showTemperatures').text("The current temperature is " + currentTemp + "&#176; &deg;  .");
}

var displayHumidity = function(city, humidityData) {
  $('.showHumidity').text("The humidity is " + humidityData + "%.");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getHumidity(city, displayHumidity);
    currentWeatherObject.getDescription(city, displayDescription);
    currentWeatherObject.getTemperatures(city, displayTemperatures);
  });
});
