function details(name: string, city: string = "Hyderabad", age?: number): void {
    console.log(name, city, age);
}

details("Harshitha");
details("Harshitha", "Bhimavaram", 20);