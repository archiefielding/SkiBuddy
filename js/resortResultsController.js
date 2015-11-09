resortSearch.controller('resortResultsController', ['$http', '$cookies', function($http, $cookies) {
  var self = this;

  self.searchResults = [];

  self.resortPositions = [];

  self.doSearchCookies = function() {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/results',
      params: {date: $cookies.get('startdate'), assetId: $cookies.get('assetId')}
      }).then(function successCallback(response) {
        const resortsCookies = angular.fromJson(response);
        self.searchResults = resortsCookies.data[0];
        self.resortPositions.push(JSON.parse(self.searchResults).data.location.coords.lat)
        self.resortPositions.push(JSON.parse(self.searchResults).data.location.coords.lng)
        console.log(self.positions)
    });
  };
}]);
