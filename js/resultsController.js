resortSearch.controller('resultsController', ['$http', '$cookies', function($http, $cookies) {
  var self = this;

  self.searchResults = [];

  self.doSearchCookies = function() {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/',
      params: {date: $cookies.get('startdate'), countryCode: $cookies.get('destination'), endDate: $cookies.get('enddate')}
      }).then(function successCallback(response) {
        const resortsCookies = angular.fromJson(response);
        const nextthingCookies = JSON.parse(resortsCookies.data[0]);
        self.searchResults = nextthingCookies["data"];
    });
  };

  self.doSearch = function(country, startdate, enddate) {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/',
      params: {date: startdate, countryCode: country, endDate: enddate}
      }).then(function successCallback(response) {
        const resorts = angular.fromJson(response);
        const nextthing = JSON.parse(resorts.data[0]);
        self.searchResults = nextthing["data"];
    });
  };

}]);
