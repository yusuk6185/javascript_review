import React, { useState } from 'react';

// 인풋 상태 관리하기
function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }
    const onReset = () => {
        setText('');
    }

    return(
        <div>
            {/* value={text} 해주는 이유 -> reset 눌렀을때 비우기 위해서 */}
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    )
}

export default InputSample;
