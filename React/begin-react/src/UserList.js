import React, { useEffect } from 'react';

// 배열 렌더링하기

const User = React.memo(function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
    useEffect(() => {
        console.log('user 값이 설정됨')
        console.log(user);
        // MOUNT => 이때 하는 작업들:
        // props -> state
        // REST API
        // D3 Video.js 라이브러리 사용 
        // setInterval, setTimeout
        return () => {
            console.log('user 값이 바뀌기 전');
            console.log(user);
            // UNMOUNT => 이때 하는 작업들:
            // clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거
        }
    }, [user]);

    return(
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            {/* parameter 를 받아서 함수를 실행하고 싶을때 -> onClick={onRemove(id)} 이렇게 하면 안됨.*/}
            {/* 렌더링 되자마자 실행해버리기 때문에 함수를 만들어 줘야함 */}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div> 
    );   
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                users.map(
                    // key 가 있어야 효율적으로 업데이트 가능
                    user => (<User 
                                user={user} 
                                key={user.id}
                                onRemove={onRemove}
                                onToggle={onToggle}
                            />)
                )
            }
        </div>
    )
}

export default React.memo(UserList);