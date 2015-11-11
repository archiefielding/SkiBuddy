resortSearch.controller('resultsController', ['$http', '$cookies', '$location', function($http, $cookies, $location) {
  var self = this;

  self.searchResults = [];
  self.weatherResults = [];

  this.result1 = '';

  this.options1 = {
    types: '(regions)'
  };    this.details1 = '';

  self.doSearchCookies = function() {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/',
      params: {date: $cookies.get('startdate'), countryCode: $cookies.get('destination'), endDate: $cookies.get('enddate')}
      }).then(function successCallback(response) {
        const resortsCookies = angular.fromJson(response);
        self.searchResults = resortsCookies.data;
    });
  };

  self.doSearch = function(country, startdate, enddate) {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/',
      params: {date: startdate, countryCode: country, endDate: enddate}
      }).then(function successCallback(response) {
        const resorts = angular.fromJson(response);
        self.searchResults = resorts.data;
    });
  };

  self.setCookies = function(asset) {
    $cookies.put('assetId', asset.asset_id)
    $cookies.put('lat', asset.lat)
    $cookies.put('lng', asset.lng)
    window.location.href = './resortResults.html'
  };

  self.doWeatherSearch = function(lat, lng)
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/weather',
      params: {lat: lat, lng: lng}
      }).then(function successCallback(response) {
        const weather = angular.fromJson(response);
        self.weatherResults = weather.data[0]
        const weatherCond = JSON.parse(self.weatherResults).data.weather[0].hourly[0].bottom[0].weatherDesc[0].value;
        return weatherCond;
    });
}]);
