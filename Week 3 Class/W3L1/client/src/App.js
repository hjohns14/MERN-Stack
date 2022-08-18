import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import Todo from './components/Todo';
import { useState } from 'react';


function App() {
  const [state, setState] = useState([])
  return (
    <div className="App">
      <Form todoList={state} setTodoList={setState}/>
      <List todoList={state} setTodoList={setState}/>
      <Todo/>
    </div>
  );
}

export default App;
