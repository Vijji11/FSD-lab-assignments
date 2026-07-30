let startt = 10;
let endd = 30;

for (let num = startt; num <= endd; num++) {
    let prime = true;

    if (num < 2) continue;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(num);
    }
}