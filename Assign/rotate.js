"use strict";
function rotateArray(arr, n) {
    n = n % arr.length;
    return [...arr.slice(n), ...arr.slice(0, n)];
}
let arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, 2));
