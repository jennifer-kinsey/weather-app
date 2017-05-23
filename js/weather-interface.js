// var Weather = require('./../js/weather.js').weatherModule;
var apiKey = "f13f28aae766b371c88539e6329823cd";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#city').val();
    $('#city').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
