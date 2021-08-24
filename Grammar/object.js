const dog = {
    name: 'doggy', //key: value
    age: 2,
}

console.log(dog.name);
console.log(dog.age);

// PRACTICE //
const ironMan = {
    name: 'Tony Stark',
    actor: 'Robert Douni Junior',
    alias: 'Iron Man',
};

const captainAmerica = {
    name: 'Steven Rogers',
    actor: 'Chris Evans',
    alias: 'Captain America',
};

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);

// DESTRUCTING ASSIGNMENT //
function print(hero) { // 혹은 function print({ alias, name, actor }) { -> 이 경우 line 32 제거.
    const { alias, name, actor } =  hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

const { name } = ironMan;
console.log(name);

// FUNCTION IN OBJECT //
const dog = {
    name: 'doggy',
    sound: 'ralf',
    say: function say() { //  say: () { 도 가능. 그러나 화살표 함수를 쓰면
        console.log(this.sound); // this 가 속한 객체로 인식하지 못함
    }
}

const cat = {
    name: 'catty',
    sound: 'meow',
}

cat.say = dog.say;
dog.say();
cat.say();

const catSay = cat.say; // 만든 함수를 밖으로 꺼내면 화살표 함수를 사용했을 때처럼
catSay(); // this 가 뭔지 몰라서 undefined 가 호출됨.

// GETTER & SETTER //
const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다.!');
        return this.a + this.b;
    }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

const dog = {
    _name: 'doggy',
    get name() {
        console.log('_name을 조회합니다..');
        return this._name;
    },
    set name(value) { // parameter를 설정해줘야 함
        console.log('이름이 바뀝니다.' + value);
        this._name = value;
    }
};

console.log(dog.name);
dog.name = 'duggy';
console.log(dog.name);

// PRACTICE //
const numbers = {
    _a = 1,
    _b = 2,
    sum = 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a =  value
    },
    set b(value) {
        this._a = value
    }
};

numbers.a = 3;
numbers.calculate;