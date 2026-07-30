class StudentData {
    readonly studentId: number;

    constructor(studentId: number, public name: string) {
        this.studentId = studentId;
    }

    display() {
        console.log(this.studentId, this.name);
    }
}

let s = new StudentData(101, "Harshitha");

s.display();