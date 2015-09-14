'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Car = require('./Car');

var _Car2 = _interopRequireDefault(_Car);

var _SportCar = require('./SportCar');

var _SportCar2 = _interopRequireDefault(_SportCar);

var _SUV = require('./SUV');

var _SUV2 = _interopRequireDefault(_SUV);

var _Truck = require('./Truck');

var _Truck2 = _interopRequireDefault(_Truck);

// TO CREATE THE FACTORY PATTERN, return an Object that contains the needed functions;
var CarFactory = {
  makeCar: function makeCar() {
    var obj = [];
    for (var i = 0; i < arguments.length; i++) {
      switch (arguments[i]) {
        case 'SportCar':
          obj.push(new _SportCar2['default']());
          break;
        case 'SUV':
          obj.push(new _SUV2['default']());
          break;
        case 'Truck':
          obj.push(new _Truck2['default']());
          break;
      }
    }
    return obj;
  }
};

var cars1 = CarFactory.makeCar('Truck');
var cars2 = CarFactory.makeCar('SUV', 'SportCar');

for (var i = 0; i < cars1.length; i++) {
  console.log(cars1[i].description());
}
console.log(' ');
for (var i = 0; i < cars2.length; i++) {
  console.log(cars2[i].description());
}