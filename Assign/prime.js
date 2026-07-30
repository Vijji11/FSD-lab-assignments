"use strict";
let number = 2;
let isPrimee = true;
if (number <= 1) {
    isPrimee = false;
}
for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrimee = false;
        break;
    }
}
console.log(isPrimee ? "Prime" : "Not Prime");
