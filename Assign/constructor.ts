class Student {
    constructor(
        public name: string,
        public age: number,
        public course: string
    ) {}

    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}

let student = new Student("Harshitha", 20, "AI & DS");

student.display();