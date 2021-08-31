import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // 함수형 업데이트 -> number + 1 해도 되는데 업데이트에 최적화 됨
        setNumber(prevNumber => prevNumber + 1);
      }
      const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
      }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;