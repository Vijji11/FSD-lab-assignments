"use strict";
class student {
    rollNo;
    constructor(rollNo) {
        this.rollNo = rollNo;
    }
    display() {
        console.log(this.rollNo);
    }
}
const s = new student(1);
s.display();
