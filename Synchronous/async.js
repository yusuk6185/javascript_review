// Synchronous (동기적)일 경우 순서대로 작업이 실행됨. 예를들어 1번째가 끝나고 2번째가 실행되고 그다음 3번째가 실행됨.
// Asynchronous (비동기적)일 경우 동시에 여러가지 작업이 실행될 수 있음.
function work() {
    setTimeout((callback) => {
        const start = Date.now();
        for (let i = 0; i < 100000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start);
    }, 0)
}

console.log('작업시작');
work((ms) => {
    console.log('작업이 끝났어요!');
    console.log('ms' + '작업이 끝났다고 해요!');
});
console.log('다음작업');

// async 가 사용되는 작업: Ajax Web API 요청, 파일 읽기, 암호화/복호화, 작업 예약

