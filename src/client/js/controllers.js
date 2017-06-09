parkingApp.controller('parkingCtrl', function($scope, $filter) {
  $scope.title = $filter('uppercase')('Parking');
  $scope.cars = [];
  $scope.colors = ["white", "Black", "Blue", "Red", "Silver"];
  $scope.alertTopic = "Something went wrong";
  $scope.showAlert = true;
  $scope.alertDescription = "You must inform the plate and the color of the car";

  $scope.park = function(car) {
    car.entrance = new Date();
    $scope.cars.push(angular.copy(car));
    delete $scope.car
  }

  $scope.closeAlert = function() {
    $scope.showAlert = false;
  };
});