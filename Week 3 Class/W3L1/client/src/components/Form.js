import React, {useState} from 'react'

const Form = (props) => {
    const {todoList, setTodoList}= props
    const [todo, setTodo] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault()
        if (todo.value.trim() === ""){
            return
        }
        setTodoList([...todoList, todo])
        setTodo({})
    }

    const inputHandler =(e) =>{
        setTodo({value:e.target.value, completed:false})
    }

    return (
        <div className='flex justify-center my-3'>
            <form onSubmit={submitHandler} className='flex'>
                <div className='flex my-2 '>
                    <label htmlFor="input" className=' mx-3'>Todo</label>
                    <input type="text" name="input" id="todo" value={todo.value} onChange={inputHandler} className='px-2 border border-black'/>
                </div>

                <div className='p-1 mx-2'>
                    <button type='submit' className='px-2 py-1 bg-lime-300 border border-slate-600 rounded'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Form