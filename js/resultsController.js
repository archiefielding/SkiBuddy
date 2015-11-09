resortSearch.controller('resultsController', ['$http', '$cookies', '$location', function($http, $cookies, $location) {
  var self = this;

  self.searchResults = [];

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

  self.setCookies = function(assetId) {
    $cookies.put('assetId', assetId)
    window.location.href = './resortResults.html'
  };

}]);
