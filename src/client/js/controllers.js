parkingApp.controller('parkingCtrl', function($scope) {
  $scope.title = 'Parking';
  $scope.cars = [];
  $scope.colors = ["white", "Black", "Blue", "Red", "Silver"];
  $scope.park = function(car) {
    car.entrance = new Date();
    $scope.cars.push(angular.copy(car));
    delete $scope.car
  }
});