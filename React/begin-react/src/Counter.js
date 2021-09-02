import React, { useReducer } from 'react';

// useReducer -> 컴포넌트 밖에서 제어할 수 있도록 함
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhanddled action');
  }
}

function Counter() {

    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({
          type: 'INCREMENT'
        })
      }
      const onDecrease = () => {
        dispatch({
          type: 'DECREMENT'
        })
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