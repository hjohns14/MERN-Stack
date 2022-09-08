import React from 'react'
import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { useNavigate } from 'react-router-dom'


const Chat = (props) => {
    const [socket] = useState(() => io(":9000"))
    const {name, setName} = props
    const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState([])
    const navigate = useNavigate()
    

    useEffect(()=>{
        window.sessionStorage.setItem("name", name)

        socket.on("welcome", data =>{
            console.log(data + name)
        })

        socket.on("get_message", data =>{
            console.log(data)

            // It is doing this twice?
            setMessages(prevMessages=>{
                return [...prevMessages, data.message]
            })
        })
        // It works without the socket.disconnet not sure why
        //return () => socket.disconnect(true)
    }, [socket, name])


    const handleQuit = (e) =>{
        window.sessionStorage.clear()
        setName("")
        navigate("/")
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        socket.emit("message", {message: newMessage, name: name})
        setNewMessage("")

    }

    const handleChange = (e )=>{
        setNewMessage(e.target.value)
    }
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <main id='message_window' className='bg-blue-50 flex flex-col justify-end absolute w-3/4 h-3/4 overflow-auto'>
                <section className=''>
                {messages.map((item, idx) =>(

                        <h1 key={idx} className='m-5  bg-slate-200 w-fit p-3 text-lg rounded-md'>
                            <span className='text-sm'>{name}</span>
                            {item}
                        </h1>
                ))}
                </section>
                <form className='mt-5 flex justify-end m-3' onSubmit={handleSubmit}>
                    <label htmlFor="message"></label>
                    <input value={newMessage} onChange={handleChange} type="text" name="message"  className='p-1'/>
                    <button className='bg-green-400 mx-5 py-1 px-2 rounded border border-black'>Send</button>
                </form>
            </main>
            <div className=' w-3/4 m-5 flex justify-end'>
                <button onClick={handleQuit} className='mx-5 bg-red-600 text-white px-3 py-1 border border-black rounded-md'>Quit</button>
            </div>
        </div>
    )
}

export default Chat