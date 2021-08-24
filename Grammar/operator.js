// LOGICAL OPERATOR //

let a = 1 + 2;
console.log(a);

a++;
++a;
// 둘다 a에 1을 더함.
// 시점의 차이 -> a++ 는 a를 출력하고 더하고, ++a 는 더하고 출력함.

a += 3;
a -= 3;
a /= 3; //나누기

// COMPARISON OPERATOR //
const a = 1;
const b = 1;
const equals = a == b;
console.log(equals); // true

// true or false 를 출력함.
// == 는 type 값을 검사하지 않기 때문에 위험.
// ex) a = 0, b = false 면 a == b -> true 출력
// === 사용 추천 -> 정확하게 검사함.

const a = null;
const b = undefined;
const equal = a === b; 
console.log(equal); // false

const notEqual = a !== b;
console.log(notEqual); // true

const a = 10;
const b = 15;
const c = 15;

console.log(a < b);
console.log(a >= b);

// STRING OPERATOR //
const a = '안녕';
const b = '하세요';

console.log(a + b);