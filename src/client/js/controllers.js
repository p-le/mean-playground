parkingApp.controller('parkingCtrl', [ 
  '$scope', 
  '$filter', 
  'parkingService',
  '$http',
  function($scope, $filter, parkingService, $http) {

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

    $scope.parkCar = function (car) {
      $http.post("/cars", car)
        .success(function (data, status, headers, config) {
          retrieveCars();
          $scope.message = "The car was parked successfully!";
        })
        .error(function (data, status, headers, config) {
          switch(status) {
            case 401:
              $scope.message = "You must be authenticated";
              break;
            case 500:
              $scope.message = "Something went wrong!";
              break;
          }
          console.log(data, status);
        });
    };

    $scope.calculateTicket = function(car) {
      $scope.ticket = parkingService.calculateTicket(car);
    };

    var retrieveCars = function() {
      $http.get('/cars')
        .success(function(data, status, headers, config) {
          $scope.cars = data;
        })
        .error(function(data, status, headers, config) {
          switch(status) {
            case 401: {
              $scope.message = "You must be authenticated";
              break;
            }
            case 500: {
              $scope.message = "Something went wrong";
              break;
            }
          }
          console.log(data, status);
        });
    };
    retrieveCars();
  }
]);