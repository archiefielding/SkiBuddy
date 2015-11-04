resortSearch.controller('resortSearchController', ['$http', function($http) {
  var self = this;

  self.searchResults = [];

  self.doSearch = function(destination, startdate) {
    $http({
      method: 'GET',
      url: 'https://api.qalendra.com/assets?date=' + startdate + '&country=' + destination,
      headers: {'Authorization': 'Basic 9mpOb6J73PKLrw1Irax2i4pmXy112W6cj2Mo2qtm:'}
    }).then(function successCallback(response) {
      self.searchResults = response;
      console.log(self.searchResults)
    });
  };
}]);
