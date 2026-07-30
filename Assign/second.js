"use strict";
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        }
        else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
}
// Example
let numbers = [10, 5, 20, 8, 15];
console.log("Second Largest:", findSecondLargest(numbers));
