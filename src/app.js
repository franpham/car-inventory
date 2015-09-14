import Car from './Car';
import SportCar from './SportCar';
import SUV from './SUV';
import Truck from './Truck';

function makeCar() {
  var obj = [];
  for (var i = 0; i < arguments.length; i++) {
    switch (arguments[i]) {
      case 'SportCar':
        obj.push(new SportCar());
        break;
      case 'SUV':
        obj.push(new SUV());
        break;
      case 'Truck':
        obj.push(new Truck());
        break;
    }
  }
  return obj;
}

var cars1 = makeCar('SUV');
var cars2 = makeCar('SUV', 'SportCar');

for (var i = 0; i < cars1.length; i++) {
  console.log(cars1[i].description());
}
console.log(' ');
for (var i = 0; i < cars2.length; i++) {
  console.log(cars2[i].description());
}
