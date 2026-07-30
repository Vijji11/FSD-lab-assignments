"use strict";
class StudentData {
    name;
    studentId;
    constructor(studentId, name) {
        this.name = name;
        this.studentId = studentId;
    }
    display() {
        console.log(this.studentId, this.name);
    }
}
let s = new StudentData(101, "Harshitha");
s.display();
