var apiKey = require('./../.env').apiKey;

Weather = function(){
}

Weather.prototype.getHumidity = function(city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayHumidity(city, response.main.humidity);
  }).fail(function(error) {
    $('.showHumidity').text(error.responseJSON.message);
  });
}

Weather.prototype.getDescription = function(city, displayDescription) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayDescription(city, response.weather[0].description);
  }).fail(function(error) {
    $('.showDescription').text(error.responseJSON.message);
  });
}

Weather.prototype.getTemperatures = function(city, displayTemperatures) {
  convertToFahr = function (kTemp) {
    fahr = 1.8 * (kTemp - 273) + 32;
    return fahr;
  };

  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayTemperatures(city, convertToFahr(response.main.temp));
  }).fail(function(error) {
    $('.showTemperatures').text(error.responseJSON.message);
  });
}



exports.weatherModule = Weather;
