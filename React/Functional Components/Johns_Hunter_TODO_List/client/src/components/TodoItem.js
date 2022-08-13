import React from 'react'

const TodoItem = (props) => {
    const {id, item:{todo, completed}, state, setState} = props
    const handleDelete = (e) =>{
        console.log(id, state[id])
        const newState = state.filter((items, index) => 
            index !== id
        )
        console.log(newState)
        setState(newState)
    }

    const handleComplete = (e) => {
        if (e.target.checked === true){
            const tempState = [...state]
            tempState[id].completed = true
            setState(tempState)
        }
        else{
            const tempState = [...state]
            tempState[id].completed = false
            setState(tempState)
        }
    }

    return (
        <div className='flex w-96 h-12 mt-5 justify-center items-center'>
            {
            completed === true ?
            <p className='flex m-3 items-center justify-center border border-slate-700 border-opacity-50 
            bg-gray-50 rounded-lg w-full h-10 shadow-slate-400 shadow-lg line-through'>{todo}
            </p>:
            <p className='flex m-3 items-center justify-center border border-slate-700 border-opacity-50 
            bg-gray-50 rounded-lg w-full h-10 shadow-slate-400 shadow-lg'>{todo}
            </p>
            }   
            {
            completed === true ?
                <input className='m-3 w-8 h-8' type="checkbox" name="check" onChange={handleComplete}/> :
                <input className='m-3 w-8 h-8' type="checkbox" name="check" onChange={handleComplete}/>
            }

            <button className='m-2 px-4 py-1 border border-gray-700 bg-red-400 rounded-md shadow-md' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default TodoItem