import React, { useState, useRef } from 'react';

// 여러개의 인풋 관리하기
function MultipleInput() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;

    const onChange = (e) => {  
        const { name, value } = e.target;
        // 객체상태를 업데이트 할때는 spread 문법으로 한번 복사하고 특정 값을 덮어씌워서 업데이트 해야함.
        setInputs({
            ...inputs,
            [name]: value,
        });
      }
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        // useRef 사용. 초기화 버튼을 눌렀을 때 name 으로 focus를 바꿈.
        nameInput.current.focus();
    }

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name}({nickname})</b>
            </div>
        </div>
    )
}

export default MultipleInput;