"use strict";
let nums = [1, 2, 2, 3, 1, 4, 2];
let count = {};
for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
}
console.log(count);
