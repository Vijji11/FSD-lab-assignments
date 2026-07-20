"use strict";
class Rectangle {
    length;
    width;
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    area() {
        console.log("Area =", this.length * this.width);
    }
}
const r = new Rectangle(10, 5);
r.area();
