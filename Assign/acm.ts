class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    showEmployee() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}

class Manager extends Employee {
    showDepartment() {
        console.log(this.department);
    }
}

let emp = new Employee("Ravi", 50000, "HR");
emp.showEmployee();

let manager = new Manager("Kiran", 70000, "IT");
manager.showDepartment();