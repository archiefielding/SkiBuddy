resortSearch.controller('graphCtrl', ['$scope', function($scope) {

  $scope.labels = ["13th November", "14th November", "15th November", "16th November", "17th November", "18th November", "19th November", "20th November"];
  $scope.series = ['Soelden'];

  $scope.data = [
      [59, 60, 63, 64, 64, 65, 66, 67]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
}]);
