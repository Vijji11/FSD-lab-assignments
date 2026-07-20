class Person {
    private age: number = 20;

    showAge() {
        console.log(this.age);
    }
}

const p = new Person();
p.showAge();