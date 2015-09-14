'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Car = (function () {
  function Car(engine, trans, doors, name) {
    _classCallCheck(this, Car);

    this.engine = engine;
    this.trans = trans;
    this.doors = doors;
    this.name = name;
  }

  _createClass(Car, [{
    key: 'description',
    value: function description() {
      return this.name + ' parts: ' + [this.engine, this.trans, this.doors + ' doors'].join();
    }
  }]);

  return Car;
})();

exports['default'] = Car;
module.exports = exports['default'];