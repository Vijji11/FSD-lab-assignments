class Car {
    public brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    show() {
        console.log(this.brand);
    }
}

const c = new Car("Toyota");
c.show();