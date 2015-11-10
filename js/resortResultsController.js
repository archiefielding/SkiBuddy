resortSearch.controller('resortResultsController', ['$http', '$cookies', '$scope', function($http, $cookies, $scope) {
  var self = this;

  self.searchResults = [];

  self.doSearchCookies = function() {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/results',
      params: {date: $cookies.get('startdate'), assetId: $cookies.get('assetId')}
      }).then(function successCallback(response) {
        const resortsCookies = angular.fromJson(response);
        self.searchResults = resortsCookies.data[0];
        self.resortLat = (JSON.parse(self.searchResults).data.location.coords.lat)
        self.resortLng = (JSON.parse(self.searchResults).data.location.coords.lng)
        console.log(self.resortLat)
        console.log(self.resortLng)
    });
  };

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
    console.log("GMAPAPI")
  })

  $scope.lat = function() {
    return self.resortLat;
  }

  $scope.lng = function() {
    return self.resortLng;
  }
}]);
