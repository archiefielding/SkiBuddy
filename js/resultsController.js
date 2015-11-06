resortSearch.controller('resultsController', ['$http', '$cookies', function($http, $cookies) {
  var self = this;

  self.searchResults = [];

  self.grabCookies = function() {
    parse = $cookies.get('results');
    self.searchResults = JSON.parse(parse);
    console.log(self.searchResults)
  };

}]);
