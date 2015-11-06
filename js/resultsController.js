resortSearch.controller('resultsController', ['$http', '$cookies', function($http, $cookies) {
  var self = this;

  self.searchResults = [];

  self.grabCookies = function() {
    self.searchResults = $cookies.get('results')
  };

}]);
