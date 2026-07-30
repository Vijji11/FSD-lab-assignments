"use strict";
let values = [1, 2, 3, 2, 4, 5, 1];
let duplicates = [];
for (let i = 0; i < values.length; i++) {
    if (values.indexOf(values[i]) !== i && !duplicates.includes(values[i])) {
        duplicates.push(values[i]);
    }
}
console.log("Duplicates:", duplicates);
