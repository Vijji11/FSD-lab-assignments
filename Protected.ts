class Animal {
    protected sound: string = "Roar";
}

class Lion extends Animal {
    display() {
        console.log(this.sound);
    }
}

const l = new Lion();
l.display();