
export default class Car {

  constructor(engine, trans, doors, name) {
    this.engine = engine;
    this.trans = trans;
    this.doors = doors;
    this.name = name;
  }

  description() {
    return this.name + ' parts: ' + [this.engine, this.trans, this.doors + ' doors'].join();
  }
}