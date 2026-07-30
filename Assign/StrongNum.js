"use strict";
let num1 = 145;
let temp1 = num1;
let sum1 = 0;
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++)
        fact *= i;
    return fact;
}
while (temp1 > 0) {
    let digit = temp1 % 10;
    sum1 += factorial(digit);
    temp1 = Math.floor(temp1 / 10);
}
console.log(sum1 === num1 ? "Strong Number" : "Not Strong");
