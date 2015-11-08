resortSearch.controller('resultsController', ['$http', '$cookies', function($http, $cookies) {
  var self = this;

  self.searchResults = [];

  self.doSearch = function() {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/',
      params: {date: $cookies.get('startdate'), countryCode: $cookies.get('destination'), endDate: $cookies.get('enddate')}
      }).then(function successCallback(response) {
        const resorts = angular.fromJson(response);
        const nextthing = JSON.parse(resorts.data[0]);
        self.searchResults = nextthing["data"];
    });
  };

}]);
