resortSearch.controller('resortResultsController', ['$http', '$cookies', function($http, $cookies) {
  var self = this;

  self.searchResults = [];

  self.doSearchCookies = function() {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/results',
      params: {date: $cookies.get('startdate'), assetId: $cookies.get('assetId')}
      }).then(function successCallback(response) {
        const resortsCookies = angular.fromJson(response);
        self.searchResults = resortsCookies.data;
        console.log(self.searchResults)
    });
  };
}]);
