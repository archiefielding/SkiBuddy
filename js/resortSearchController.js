resortSearch.controller('resortSearchController', ['$http', '$base64', function($http, $base64) {
  var self = this;

  self.searchResults = [];

  self.doSearch = function(destination, startdate) {
    $http({
      method: 'GET',
      url: 'https://api.qalendra.com/assets?date=' + startdate + '&countryCode=' + destination,
      headers: { 'Authorization': 'Basic OW1wT2I2SjczUEtMcncxSXJheDJpNHBtWHkxMTJXNmNqMk1vMnF0bTo=' }
    }).then(function successCallback(response) {
      self.searchResults = response;
      console.log(self.searchResults)
    });
  };
}]);
