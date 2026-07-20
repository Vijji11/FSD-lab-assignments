"use strict";
class Person {
    age = 20;
    showAge() {
        console.log(this.age);
    }
}
const p = new Person();
p.showAge();
