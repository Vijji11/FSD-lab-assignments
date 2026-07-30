"use strict";
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    show() {
        console.log(this.brand);
    }
}
const c = new Car("Toyota");
c.show();
