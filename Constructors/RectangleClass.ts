class Rectangle {
    constructor(public length: number, public width: number) {}

    area() {
        console.log("Area =", this.length * this.width);
    }
}

const r = new Rectangle(10, 5);
r.area();