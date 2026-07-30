function findMissingNumber(arr: number[], n: number): number {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

let numbers = [1, 2, 3, 5];

console.log("Missing Number:", findMissingNumber(numbers, 5));