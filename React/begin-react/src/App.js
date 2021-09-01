import React, { useRef, useState } from 'react';
// import Hello from './Hello';
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
// import MultipleInput from './MultipleInput';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'yusuk6185',
      email: 'yusuk6185@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'test',
      email: 'test@test.com',
      active: false,
    },
    {
      id: 3,
      username: 'velopert',
      email: 'velopert@gmail.com',
      active: false,
    }
  ]);
  // 컴포넌트 안의 변수 만들기
  const nextId = useRef(4);
  // 배열에 항목 추가하기
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    setUsers([...users, user]) // 불변성을 지켜줘야 함
    // setUsers(users.concat(user)) 를 써도 같음
    setInputs({
      username:'',
      email:''
    })
    console.log(nextId.current); // 4
    nextId.current += 1;
  };
  
  // 배열에 항목 삭제하기
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  // 배열 업데이트 하기 -> map 사용하고 spread 로 불변성 유지
  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ))
  }

  return (
    <>
    {/* <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" isSpecial={false}/>
      <Hello/>
    </Wrapper> */}
    {/* <Counter/> */}
    {/* <InputSample/> */}
    {/* <MultipleInput/> */}
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
