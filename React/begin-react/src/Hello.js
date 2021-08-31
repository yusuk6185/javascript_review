import React from 'react';

function Hello({ name, color, isSpecial }) {
    return (
        <div style={{
            color
        }}>
            {/* 조건부 렌더링 -> && => 참일때만 실행, 삼항 연산자 => 참과 거짓일때 각각 실행 */}
           {isSpecial && <b>*</b>} 
           {isSpecial ? 'Special' : 'Not Special'}
            안녕하세요 {name}
        </div>
    );
}

// Props 가 넘어오지 않았을때 default prop 값
Hello.defaultProps = {
    name: '이름없음'
} 
export default Hello;
