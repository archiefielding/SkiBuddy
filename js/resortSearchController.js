resortSearch.controller('resortSearchController', ['$http', '$cookies', '$location', function($http, $cookies, $location) {
  var self = this;

  self.doSearch = function(destination, startdate, enddate) {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/',
      params: {date: startdate, countryCode: destination, endDate: enddate}
      }).then(function successCallback(response) {
        const resorts = angular.fromJson(response);
        const nextthing = JSON.parse(resorts.data[0]);
        $cookies.put('results', JSON.stringify(nextthing["data"]));
        window.location = '/results.html'
    });
  };

  self.grabCookies = function() {
    self.searchResults = $cookies.get('results')
  };
}]);
