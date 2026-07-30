let num2 = 12345;
let sum2 = 0;

while (num2 > 0) {
    sum2 += num2 % 10;
    num2 = Math.floor(num2 / 10);
}

console.log(sum2);