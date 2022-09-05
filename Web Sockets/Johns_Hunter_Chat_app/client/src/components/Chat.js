import React from 'react'
import { useState, useEffect } from 'react'
import io from 'socket.io-client'

const Chat = () => {
    const [socket] = useState(() => io(":9000"))

    useEffect(()=>{
        socket.on("welcome", data =>{
            console.log(data)
        })
        
        return socket.disconnect(true)
    }, [])
    return (
        <div>Chat</div>
    )
}

export default Chat