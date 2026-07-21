"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    show() {
        console.log(this.value);
    }
}
const b = new Box("TypeScript");
b.show();
