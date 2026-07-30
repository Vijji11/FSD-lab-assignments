interface Length {
    length: number;
}

function printLength<T extends Length>(item: T) {
    console.log(item.length);
}

printLength("Hello");
printLength([1, 2, 3, 4]);