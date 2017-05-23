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
    return Math.round(fahr);
  };
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayTemperatures(city, convertToFahr(response.main.temp));
  }).fail(function(error) {
    $('.showTemperatures').text(error.responseJSON.message);
  });
}

Weather.prototype.getSunrise = function(city, displaySunrise) {
  converttoSunrise = function(epochTime) {
    var myDate = new Date(epochTime *1000);
    return myDate.toLocaleString();
  };
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displaySunrise(city, converttoSunrise(response.sys.sunrise));
  }).fail(function(error) {
    $('.showSunrise').text(error.responseJSON.message);
  });
}

Weather.prototype.getSunset = function(city, displaySunset) {
  converttoSunset = function(epochTime) {
    var myDate = new Date(epochTime *1000);
    return myDate.toLocaleString();
  };
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displaySunset(city, converttoSunset(response.sys.sunset));
  }).fail(function(error) {
    $('.showSunset').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
