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

    self.resort_ratings = [];

    for (day_idx in self.searchResults) {
      resorts = self.searchResults[day_idx]
      console.log(resorts);
      for (r_idx in resorts) {
        aId = resorts[r_idx].assetId
        if (!resort_ratings[aId]) {
          resort_ratings[aId] = []
        }
        resort_ratings[aId].push(resorts[r_idx].predictions.data[0].score)
      }
    }

    for (aId in resort_ratings) {
      ratings_sum = self.resort_ratings[aId].reduce(function(a, b){return a+b;})
      ratings_avg = ratings_sum / resort_ratings[aId].length
      console.log("AssetID: " + aId + " average rating: " + ratings_avg)
    }

}]);
