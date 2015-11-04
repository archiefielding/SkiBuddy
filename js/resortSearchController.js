resortSearch.controller('resortSearchController', ['$http', function($http) {
  var self = this;

  self.searchResults = [];

  $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode('----myusername----' + ':' + '----mypass---');
  self.doSearch = function(destination, startdate) {
    $http({
      method: 'GET',
      url: 'https://api.qalendra.com/assets?date=' + startdate + '&countryCode=' + destination,
      headers: { 'Authorization': 'Basic 9mpOb6J73PKLrw1Irax2i4pmXy112W6cj2Mo2qtm:' }
    }).then(function successCallback(response) {
      self.searchResults = response;
      console.log(self.searchResults)
    });
  };
}]);
