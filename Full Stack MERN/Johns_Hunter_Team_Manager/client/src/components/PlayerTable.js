import axios from 'axios'
import React from 'react'
import Delete from './Delete'
import { useState } from 'react'


const PlayerTable = (props) => {
    const {players, setPlayers} = props
    const [seen, setSeen] = useState(false)
    const [name, setName] = useState('')
    const [id, setId] = useState()

    const handleDelete = (id) => {
        togglePopup(name, id)
        axios.delete("http://localhost:9000/api/players/" +id, {_id: id})
        .then(res => {
            console.log(res.data)
            axios.get("http://localhost:9000/api/players")
            .then(res =>{
                setPlayers(res.data.allPlayers)
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    const togglePopup = (name, id) =>{
        setSeen(!seen)
        setName(name)
        setId(id)
    }

    function ConfirmDelete(props) {
        const {name, id} = props
        return (
            <>
                <div className="p-5 fixed z-10 bg-red-100 border border-red-700">
                    <h1 className='text-lg my-4'>Are you sure you want to delete {name}</h1>
                    <button onClick={() => handleDelete(id)} id='Confirmed' className='px-3 py-1 bg-red-600 border border-black mx-4'>Yes</button>
                    <button onClick={togglePopup} id='Cancel' className='px-3 py-1 bg-green-600 border border-black mx-4'>No</button>
                </div>
            </>
        )
    }

    return (
        <>
        {seen ?
        <ConfirmDelete name={name} id={id}/>
        :
        <></>
        }
        <table className='w-3/4 text-start mx-5 my-2 border border-black'>
            <thead>
                <tr>
                    <th className='py-3 text-2xl border border-black'>Player</th>
                    <th className='py-3 text-2xl border border-black'>Position</th>
                    <th className='py-3 text-2xl border border-black'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {players.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td className='px-2 py-4 border-r border-t border-black'>{item.name}</td>
                            <td className='px-2 py-4 border-r border-t border-black'>{item.position}</td>
                            <td className='px-2 py-4 border-r border-t border-black'>
                                <Delete toggle={togglePopup} id={item._id} name={item.name}/>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default PlayerTable