class Employee {
    constructor(public id: number, public salary: number) {}

    details() {
        console.log(`ID: ${this.id}, Salary: ${this.salary}`);
    }
}

const e1 = new Employee(101, 50000);
e1.details();