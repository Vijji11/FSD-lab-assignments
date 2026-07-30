class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    show() {
        console.log(this.value);
    }
}

const b = new Box<string>("TypeScript");
b.show();