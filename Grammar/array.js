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

