import './App.css';
import TodoItem from './components/TodoItem';
import { useState } from 'react';



function App() {

  const todoList =[
    {
      todo: "Take out the garbage",
      completed: false
    },
    {
      todo: "Go for a run",
      completed: false
    },
    {
      todo: "Finish this project",
      completed: false
    }
  ]

  const [state, setState] = useState(todoList)
  const [newTodo, setNewTodo] = useState('')
  const addTodo = (e) =>{
    e.preventDefault()
    setState([...state, {todo: newTodo, completed:false}])
    setNewTodo('')
  }



  return (
    <div className="App flex justify-center items-center flex-col">
      {
        state.map( ( item, index) => {
          return <TodoItem key={index} id={index} item={item} state={state} setState={setState}/>
        })
      }
      <form onSubmit={addTodo} className='flex justify-center items-center m-5'>
        <label htmlFor="todo" className='mx-2'>Todo: </label>
        <input className='border border-black mx-2 px-0.5' type="text" name="todo" value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}}/>
        <button className='mx-2 bg-slate-400 border border-slate-600 rounded-md px-2' type='submit'>Submit</button>
      </form>
      
    </div>
  );
}

export default App;
