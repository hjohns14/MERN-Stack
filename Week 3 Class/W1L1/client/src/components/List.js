import React from 'react'

const List = (props) => {

    const {todoList, setTodoList} = props
    return (
        <div>
            <h2 className='py-2 text-3xl border-b-2 border-b-slate-700'>List</h2>
            {todoList.map((item,index) =>(
                <div key={index}>
                    <h3>Todo: {item.value}</h3>
                    <h3>Completed: { }</h3>
                    <input type="checkbox" name="completed" />
                    <button className=''>Delete</button>
                </div>
            ))
        }
        </div>
    )
}

export default List