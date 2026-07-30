"use strict";
let number = 153;
let temp = number;
let sum = 0;
while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}
console.log(sum === number ? "Armstrong" : "Not Armstrong");
