class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

const dog = new Animal('dog', 'doggy', 'ralf');
const cat = new Animal('cat', 'catty', 'meow');

dog.say();
cat.say();

// 다른 방법
class Dog extends Animal {
    constructor(name, sound) {
        super('dog', name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('cat', name, sound);
    }
}

const dog2 = new Dog('doggy', 'ralf');
const cat2 = new Cat('catty', 'meow');

dog2.say();
cat2.say();

// PRACTICE //
class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name}을/를 파는 브랜드: ${this.brands.join(', ')}`);
    }
}

const chicken = new Food('치킨');
chicken.addBrand('BBQ');
chicken.addBrand('BHC');

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

chicken.print();
pizza.print();
