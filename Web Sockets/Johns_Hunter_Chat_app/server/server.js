const express = require("express")
const cors = require('cors')
const socket = require("socket.io")
const app = express()
const port = 9000

app.use(
    cors(),
    express.json(),
    express.urlencoded({extended:true})
)

// DB and Routes


// Server
const server = app.listen(port, () => console.log(`Locked and loaded on port ${port}`))


//Socket
const io = socket(server, {
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        creditials: true
    }
})

io.on("connection", socket =>{
    console.log("Nice to meet you. (Shake hand)\nSocket id: " + socket.id)

    socket.on("event", data =>{
        // send message with 'data' to all clients except the on the emitted the event
        socket.broadcast.emit("Event_to_all_other_clients", data)
    })
    socket.emit('welcome', "Hello Client")

    socket.on('goodbye', data =>{
        console.log(data)
    })
})