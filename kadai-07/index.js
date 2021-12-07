class Animal {
    constructor() {
        this.energy = 100
    }

    eat () {
        this.energy = this.energy + 10
    }
}

class Cat extends Animal {
    speak() {
        console.log ("meow")
    }
}

const cat = new Cat
cat.speak()
cat.eat()

console.log(cat.energy)