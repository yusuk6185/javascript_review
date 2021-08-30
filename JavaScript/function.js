// const a = 1;
// const b = 2;
// const sum = a + b;

function add(a, b) {
    return a + b
};

const sum = add(1, 2);
console.log(sum);

function hello(name) {
    console.log('Hello, ' +  name + '!')
}

hello('ian');

// TEMPLATE LITERAL //

function  hello(name)  {
    return (`Hello ${name}!`);
}

const result = hello('ian');
console.log(result);

// PRACTICE //
function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90){
        return 'A';
    } else if (score === 89) {
        return 'B+';
    } else if (score >=  80) {
        return 'B';
    } else {
        return 'C';
    }
}

const grade = getGrade(100);

console.log(grade);

// ARROW FUNCTION //
const add = (a, b) => a + b;

const hello = (name) => {
    console.log(`Hello ${name}!`);
}


