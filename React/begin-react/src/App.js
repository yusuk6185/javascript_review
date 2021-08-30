import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
      <Hello/>
    </Wrapper>
  );
}

export default App;
