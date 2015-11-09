resortSearch.controller('resortSearchController', ['$http', '$cookies', '$location', function($http, $cookies, $location) {
  var self = this;

  self.setCookies = function(destination, startdate, enddate) {
    $cookies.put('destination', destination)
    $cookies.put('startdate', startdate)
    $cookies.put('enddate', enddate)
    window.location.href = './results.html'
  };

}]);
