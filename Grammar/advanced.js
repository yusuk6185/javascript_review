// ternary operator //
// condition ? true : false 구조
const array = [];
let text = array.length === 0 ? 'the array is empty' : 'the array is not empty';

console.log(text);

// TRUTHY & FALSY //
// undefined, null, 0, '', NaN 은 False 값을 가짐 -> !undefined = true 로 출력됨
// 값이 있는 숫자, 'hello', [], {} 은 True 값을 가짐 -> !3 = false 로 출력됨. 
const value = null;
const truthy = value ? true : false; // const truthy = !!value 와 같음.

console.log(truthy);

// SHORT CIRCUIT EVALUATION //
// true && true 라면 두 번째 true 를 출력함
// true || ture 라면 첫 번째 true 를 출력함
const object = { name: 'dog' };

const name = object && object.name;
console.log(name);

const nameLessDog = {
    name: '',
};

function getName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}

const name = getName(nameLessDog);
console.log(name);

// DEFAULT PARAMETER //
function calculateCircleArea(r = 1) {
    return Math.PI * r * r;
}

// const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea(); // parameter를 지정하지 않으면 r 은 1로 적용됨.
console.log(area);

// CONDITIONAL //
function isAnimal(text) {
    const animals = ['cat', 'dog', 'tiger', 'horse'];
    return animals.includes(text);
}

// const isAnimal = text => ['cat', 'dog', 'tiger', 'horse'].includes(text);

console.log(isAnimal('cat'));
console.log(isAnimal('phone'));

function getSound(animal) {
    const sounds = {
        dog: 'ralf',
        cat: 'meow',
        bird: 'prprpr',
        cow: 'moo'
    }
    return sounds[animal] || '...?';
}

const sound = getSound(dog);
console.log(sound);

function makeSound(animal) {
    const tasks = {
        dog: () => {
            console.log('ralf');
        },
        cat() {
            console.log('meow');
        },
        cose() {
            console.log('moo');
        }
    }
    const task = tasks[animal];
    if (!task) {
        console.log('...?');
        return;
    }
    task();
}

makeSound('dog');

// DESTRUCTING ASSIGNMENT //
const object = { 
    a: 1,
    b: 2
}

function print({ a, b }) {
    console.log(a);
    console.log(b);
}

// 이걸 비구조화 할당으로 바꾸면

print(object);

const object = { a: 1 };

const { a, b = 2 } = object;
console.log(a);
console.log(b);



const animal = {
    name: 'doggy',
    type: 'dog'
}

const nickname = animal.name;
console.log(nickname);

// 이걸 비구조화 할당으로 바꾸면 

const { name: nickname } = animal;
console.log(nickname);
console.log(animal) // 기존 객체에는 변화가 없음

// 배열의 비구조화 할당
const array = [1];

const [ one, two ] = array;
console.log(one);
console.log(two);

// 복잡한 객체 할당
const deepObject = {
    state: {
        information: {
            name: 'ian',
            languages: ['korean', 'english']
        }
    },
    value: 5
};

const { name, languages: [first, second] } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
    name,
    first,
    second,
    value
}

console.log(extracted);

// SPREAD //
// ... 한 자리에 기존에 있던 속성이 들어온다.
const slime = {
    name: 'slime'
};
const cuteSlime = {
    ...slime,
    attribute: 'cute'
};
const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};
const greenCuteSlime = {
    ...purpleCuteSlime,
    color: 'green'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);


const animals = ['cat', 'dog', 'pigeon'];
const anotherAnimals = [...animals, 'lion'];

console.log(anotherAnimals);


const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];

console.log(spreadNumbers);