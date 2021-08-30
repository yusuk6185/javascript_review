const a = 1;
if (a + 1 === 2) {
    const a = 2;
    console.log('a + 1 이 2 입니다.');
}
console.log('if 문 밖의 a 값은 ' + a);

//  블록 밖이랑 안이랑 다르게 선언됨

// IF-ELSE //
const b = 10;
if (b > 15) {
    console.log('b 가 10보다 큽니다.');
}
else {
    console.log('b 가 15보다 크지 않습니다.');
}

// IF-ELSE IF-ELSE //
if (b === 5) {
    console.log('5 입니다.');
} else if (b === 10) {
    console.log('10 입니다.');
} else {
    console.log('5도 아니고 10도 아닙니다.');
}

// SWITCH CASE //
const device = 'iphone';

switch (device) {
    case 'iphone':
        console.log('아이폰!');
        break; // break 안하면 뒤에꺼도 다 실행함
    case 'ipad':
        console.log('아이패드!');
        break;
    case 'galaxy note':
        console.log('갤럭시 노트!');
        break;
    default: // 해당 안되면 default 실행
        console.log('모르겠네요!');
}

