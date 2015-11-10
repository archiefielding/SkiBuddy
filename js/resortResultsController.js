resortSearch.controller('resortResultsController', ['$http', '$cookies', '$scope', function($http, $cookies, $scope) {
  var self = this;

  self.searchResults = [];
  self.weatherResults = [];

  self.doSearchCookies = function() {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/results',
      params: {date: $cookies.get('startdate'), assetId: $cookies.get('assetId')}
      }).then(function successCallback(response) {
        const resortsCookies = angular.fromJson(response);
        self.searchResults = resortsCookies.data[0];
        self.resortLat = (JSON.parse(self.searchResults).data.location.coords.lat);
        self.resortLng = (JSON.parse(self.searchResults).data.location.coords.lng);
        self.resortName = (JSON.parse(self.searchResults).data.name);
        self.resortCountry = (JSON.parse(self.searchResults).data.location.address.country);
        console.log(self.searchResults);
      })
  };

  self.doWeatherCookies = function() {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/weather',
      params: {lat: self.resortLat, lng: self.resortLng}
      }).then(function successCallback(response) {
        const weatherCookies = angular.fromJson(response);
        self.weatherResults = weatherCookies.data[0];
        console.log(JSON.parse(self.weatherResults).data.weather);
      })
  };

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
    console.log("GMAPAPI")
  });

  $scope.lat = function() {
    return self.resortLat;
  };

  $scope.lng = function() {
    return self.resortLng;
  };

  $scope.resortName = function() {
    return self.resortName;
  };

  $scope.resortCountry = function() {
    return self.resortCountry;
  };
}]);
