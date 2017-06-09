// parkingApp.factory('parkingService', [
//   'parkingConfig',
//   function(parkingConfig) {
//     var _calculateTicket = function(car) {
//       var departHour = new Date().getHours();
//       var entranceHour = car.entrance.getHours();
//       var parkingPeriod = departHour - entranceHour;
//       var parkingPrice = parkingPeriod * parkingConfig.parkingRate;

//       return {
//         period: parkingPeriod,
//         price: parkingPrice
//       };
//     };

//     return {
//       calculateTicket: _calculateTicket
//     }
//   }
// ]);


/**
 * USING PROVIDER
 */
// parkingApp.provider("parkingService", [
//   'parkingConfig',
//   function (parkingConfig) {
//     var _parkingRate = parkingConfig.parkingRate;

//     var _calculateTicket = function (car) {
//       var departHour = new Date().getHours();
//       var entranceHour = car.entrance.getHours();
//       var parkingPeriod = departHour – entranceHour;
//       var parkingPrice = parkingPeriod * _parkingRate;

//       return {
//         period: parkingPeriod,
//         price: parkingPrice
//       };
//     };

//     this.setParkingRate = function (rate) {
//       _parkingRate = rate;
//     };

//     this.$get = function () {
//       return {
//         calculateTicket: _calculateTicket
//       };
//     };
//   } 
// ]);

/**
 * USING SERVICE
 */
parkingApp.service('parkingService', [
  'parkingConfig',
  function(parkingConfig) {
    var _parkingRate = parkingConfig.parkingRate;

    this.calculateTicket = function(car) {
      var departHour = new Date().getHours();
      var entranceHour = car.entrance.getHours();
      var parkingPeriod = departHour - entranceHour;
      var parkingPrice = parkingPeriod * _parkingRate;

      return {
        period: parkingPeriod,
        price: parkingPrice
      };
    };

    this.setParkingRate = function(rate) {
      _parkingRate = rate;
    };
  };
]);

parkingApp.service('parkingServiceFacade', [
  $http,
  function($http) {
    this.getCars = function() {
      return $http.get("/cars");
    };
    
    this.getCar = function(id) {
      return $http.get('/cars');
    };

    this.saveCar = function(car) {
      return $http.post("/cars", car);
    };

    this.updateCar = function(car) {
      return $http.put('/cars/' + car.id, car);
    };

    this.deleteCar = function(car) {
      return $http.delete('/cars/' + id);
    };
  }
])