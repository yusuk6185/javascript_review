/// OBJECT CONSTRUCTOR //
 Animal(type, name, sound) { // 객체
    this.type = type;
    this.name = name;
    this.sound = sound;
};

Animal.prototype.say = function() { // 공유되는 함수, 값을 설정함
    console.log(this.sound);
}

const dog = new Animal('dog', 'doggy', 'ralf'); // 객체 생성자
const cat = new Animal('cat', 'catty', 'meow');
dog.say();
cat.say();
console.log(dog.name);

// HERITAGE //
function Dog(name, sound) {
    Animal.call(this, 'dog', name, sound);
}

function Cat(name, sound) {
    Animal.call(this, 'cat', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog2 = new Dog('doggy', 'ralf');
const cat2 = new Cat('catty', 'meow');

dog2.say();
cat2.say();

