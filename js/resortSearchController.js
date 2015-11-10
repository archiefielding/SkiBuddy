resortSearch.controller('resortSearchController', ['$http', '$cookies', '$location', function($http, $cookies, $location) {
  var self = this;

  self.setCookies = function(destination, startdate, enddate) {
    $cookies.put('destination', destination)
    $cookies.put('startdate', startdate)
    $cookies.put('enddate', enddate)
    window.location.href = './results.html'
  };

}])
  .controller('autoComplete', ['$scope', function($scope){
    $scope.result1 = '';
    $scope.options1 = {
      types: '(regions)'
    };    $scope.details1 = '';
}]);
