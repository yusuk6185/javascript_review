// FOR LOOP //
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

const names = ['doggy', 'catty', 'duggy'];

for (let i = 0; i < names.lenth; i++) {
    console.log(names[i]);
}

// WHILE LOOP //
let i = 0;
let isFun = false;

while (!isFun) { // isFun === false
    console.log(i);
    i++;
    if (i === 30) {
        isFun = true;
    }
}
// 숫자 비교를 조건으로 쓸 거면 for loop 쓰는게 나음

// FOR OF & FOR IN //
const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) { // 파이썬의 array 이용한 for in 문과 같음 ex) for item in items
    console.log(number);
}

const doggy = {
    name: 'doggy',
    sound: 'ralf',
    age: 2
};

console.log(Object.keys(doggy)); // print object key 
console.log(Object.values(doggy)); // print object value
console.log(Object.entries(doggy)); // print obejct array

for (let key in doggy) {
    console.log(key);
}

for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
}

// BREAK & CONTINUE //
for (let i = 0; i < 10; i++) {
    if (i === 2) continue; // skip
    console.log(i);
    if (i === 5) break; // end
}

// PRACTICE //
function sumOf(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum
  };
  
const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

// QUIZ //
function biggerThanThree(numbers) {
    let array = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 3) continue;
        else {
            array.push(numbers[i]);
        }
    }
    return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));