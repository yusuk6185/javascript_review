import React from 'react';

// 배열 렌더링하기

function User({ user }) {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div> 
    );   
}

function UserList() {
    const users = [{
        id: 1,
        username: 'yusuk6185',
        email: 'yusuk6185@gmail.com'
        },
        {
            id: 2,
            username: 'test',
            email: 'test@test.com'
        },
        {
            id: 3,
            username: 'velopert',
            email: 'velopert@gmail.com'
        }
    ];

    return (
        <div>
            {
                users.map(
                    // key 가 있어야 효율적으로 업데이트 가능
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    )
}

export default UserList;