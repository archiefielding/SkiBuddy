resortSearch.controller('resortSearchController', ['$http', function($http) {
  var self = this;

  self.searchResults = [];

  self.doSearch = function(destination, startdate, enddate) {
    $http({
      method: 'GET',
      url: 'https://gentle-reaches-8946.herokuapp.com/',
      params: {date: startdate, countryCode: destination, endDate: enddate}
      }).then(function successCallback(response) {
        self.searchResults = response.data;
        console.log(self.searchResults)
      });
    };
}]);
