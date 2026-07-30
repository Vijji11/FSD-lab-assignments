"use strict";
class Animal {
    sound = "Roar";
}
class Lion extends Animal {
    display() {
        console.log(this.sound);
    }
}
const l = new Lion();
l.display();
