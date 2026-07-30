class student {
    readonly rollNo: number;

    constructor(rollNo: number) {
        this.rollNo = rollNo;
    }

    display() {
        console.log(this.rollNo);
    }
}

const s = new student(1);
s.display();