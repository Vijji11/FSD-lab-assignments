class Student {
    constructor(public name: string, public age: number) {}

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const s1 = new Student("Harshitha", 19);
s1.display();