var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  $('#weather-form').submit(function(event) {
    event.preventDefault();
    var city = $('#city').val();
    $('#solution').append("Here's the weather in " + city);
  });
});
