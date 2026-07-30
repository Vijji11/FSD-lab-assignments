"use strict";
class Employee {
    id;
    salary;
    constructor(id, salary) {
        this.id = id;
        this.salary = salary;
    }
    details() {
        console.log(`ID: ${this.id}, Salary: ${this.salary}`);
    }
}
const e1 = new Employee(101, 50000);
e1.details();
