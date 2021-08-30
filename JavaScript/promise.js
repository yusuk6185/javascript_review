// 복잡한 callback들을 간단하게 만들어 줄 수 있다.
// example
function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if (callback) {
            callback(increased);
        }
    }, 1000)
}

increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('작업 끝!');
                })
            })
        })
    })
})

// Promise 사용
const myPromise = new Promise((resolve, reject) => { // 성공하는 상황 ->  resolve, 실패하는 상황 -> reject
    setTimeout(() => {
        reject(new Error());
    }, 1000)
});

myPromise.then(result => { // promise가 끝나고 할 작업 설정
    console.log(result); 
}).catch(e => {
    console.log(e);
})

// example 해결
function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new.Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    })
}

increaseAndPrint(0).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).catch(e => {
    console.log(e);
})

// better way
increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
    console.log(e);
})

// ASYNC/AWAIT -> Promise를 더 쉽게 만들어줌
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    console.log('안녕하세요');
    await sleep(1000);
    console.log('반갑습니다');
}
process().then(value => {
    console.log(value);
})

async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function process2() {
    try {
        await makeError;
    } catch (e) {
        console.error(e);
    }
}

// PROMISE ALL //
// 동시에 시작해서 다 끝나면 변수에 저장하기
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => { // 화살표 함수로 async 사용하기
    await sleep(500);
    return 'doggy';
}

const getRabbit = async () => {
    await sleep(1000);
    return 'rabbitto';
}

const getTurtle = async () => {
    await sleep(3000);
    return 'turtle';
}

async function process() {
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]); // 하나라도 에러 발생하면 전체 에러 발생
    console.log(results);
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]); // 각각 변수에 담는 법
    console.log(dog);
}

process();

// PROMISE RACE //
// 가장 빨리 끝난 것만 변수에 담음
async function process2() {
    const first = await Promise.race([getDog(), getRabbit(), getTurtle()]); // 가장 빨리 끝난것만 에러가 아니면 에러 발생 x
    console.log(first);
}

process2()