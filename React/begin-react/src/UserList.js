import React from 'react';

// 배열 렌더링하기

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
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
}

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

export default UserList;