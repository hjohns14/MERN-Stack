import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthorTable = (props) => {
    const {allAuthors, setAllAuthors} = props
    const navigate = useNavigate()

    function EditButton(props){
        const {id} = props
        return (
            <>
                <button onClick={()=> {navigate("/edit/" +id)}} className='bg-yellow-500 mx-3 px-4 py-1 border \
                border-black rounded-lg shadow-yellow-800 shadow-md'>
                    Edit
                </button>
            </>
        )
    }

    
    function DeleteButton(props){
        const {id} = props
        const handleDelete = (e) =>{
            axios.delete("http://localhost:9000/api/authors/" + id)
            .then(res => {
                console.log(res.data)
                axios.get("http://localhost:9000/api/authors/")
                .then(res => setAllAuthors(res.data.allAuthors))
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        }
        return (
            <>
                <button onClick={handleDelete} className='bg-red-500 mx-3 px-4 py-1 border border-black rounded-lg shadow-red-800 shadow-md'>Delete</button>
            </>
        )
    }

    return (
        <table className='border-4 border-neutral-600 shadow-xl shadow-zinc-600'>
        <thead>
            <tr>
                <th className='p-3 border-b-2 border-r-2 border-neutral-400'>Author</th>
                <th className='p-3 border-b-2 border-neutral-400'>Actions</th>
            </tr>
        </thead>
        <tbody>
            {allAuthors.map((item, idx) =>
                <tr key={idx}>
                    {(idx % 2 === 0)?
                    <>
                        <td className='p-3 border-r-2 border-neutral-400 bg-slate-200'>
                            {item.name}
                        </td>
                        <td className='p-3 border-l-2 border-neutral-400 bg-slate-200'>
                            <EditButton id={item._id}/> <DeleteButton id={item._id}/>
                        </td>
                    </>:
                    <>
                        <td className='p-3 border-r-2 border-neutral-400 bg-slate-50'>
                            {item.name}
                        </td>
                        <td className='p-3 border-l-2 border-neutral-400 bg-slate-50'>
                            <EditButton id={item._id}/> <DeleteButton id={item._id}/>
                        </td>
                    </>
                
                
                    
                    }
            </tr>
            )}
        </tbody>
    </table>
    )
}

export default AuthorTable