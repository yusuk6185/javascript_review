const array = [1, 2, 3, 4, 5];
console.log(array);

const objects = [
    { name: 'doggy'},
    { name: 'catty'}
];

console.log(objects[0], objects[1])

objects.push ({ // 파이썬의 append 와 같음
    name: 'duggy'
});

console.log(objects); 

console.log(objects.length); // 파이썬의 len()함수와 같음

const array = [1, true, {a: 1}, [1, 2, 3, 4]]; // 다양한 type 이 들어갈 수 있음

// FOR EACH //
const superheros = ['ironMan', 'Captain America', 'Thor', 'Dr.Strange']

superheros.forEach(hero => { // superheros.forEach(function(hero) { 와 같음
    console.log(hero);
}); 

// MAP //
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const square = n => n * n;

console.log(array.map(square));
console.log(n => n * n);

const squared = array.map(n => n * n);

console.log(squared);

const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

console.log(items.map(item => item.text));

// INDEX //
const superheros = ['ironMan', 'Captain America', 'Thor', 'Dr.Strange']
const index = superheros.indexOf('ironMan');

console.log(index);

// 조건이나 객체로 되어 있는 경우에는 findIndex 사용
const todo = [
    {
        id: 1,
        text: '함수 배우기',
        done: true
    },
    {
        id: 2,
        text: '배열 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체 배우기',
        done: false
    }
];

const index = todo.findIndex(todo => todo.id === 3);
console.log(index);

const notDone = todo.find(todo => todo.done === false); // 첫번째로 찾은걸 출력
console.log(notDone);

// FILTER //
const tasksNotDone = todo.filter(todo => todo.done === true); // 조건에 맞는 객체 모두 출력
console.log(tasksNotDone); 

// SPLICE & SLICE //
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);

const sliced = numbers.slice(0, 2); // slice(시작, 끝) -> 기존의 배열을 수정하지 않음
console.log(numbers);
console.log(sliced);

const spliced = numbers.splice(index, 2); // splice(시작 인덱스, 개수) -> 기존의 배열을 수정함

console.log(numbers);
console.log(spliced);

// SHIFT & POP //
const numbers = [10, 20, 30, 40]; 
const value = numbers.shift(); // 맨 앞에서 하나를 꺼냄. 기존 배열을 수정함.

console.log(value);
console.log(numbers);

const value2 = numbers.pop(); // 맨 뒤에서 하나를 꺼냄. 기존 배열을 수정함.
console.log(value2);
console.log(numbers);

const numbers = [10, 20, 30, 40];
numbers.unshift(0); // 맨 앞에다 하나를 추가함.
console.log(numbers);

numbers.push(50); // 맨 뒤에다 하나를 추가함.
console.log(numbers);

// CONCAT //
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2); // spread 연산자 사용시 -> const concated = [...arr1, ...arr2];
console.log(concated); // 기존의 배열을 건드리지 않음.

// JOIN //
console.log(concated.join());
console.log(concated.join(' ')); // 안에 seperator 넣을 수 있음.
console.log(concated.join(', '));

// REDUCE //
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);

const avg = numbers.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);

console.log(avg);

const alphabets = ['a', 'a', 'a', 'b', 'b', 'c', 'd', 'e', 'e'];
const counts = alphabets.reduce((acc, current) => {
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {});

console.log(counts);

// QUIZ //
function countBiggerThanTen(numbers) {
    const result = [];
    numbers.forEach(number => {
        if (number > 10) {
            result.push(number);
        }
    const answer = result.length;
    return answer;
    })
};

const count = countBiggerThanTen([1, 2, 3, 5, 10 ,20, 30, 40, 50, 60]);
console.log(count);