import React from 'react'
import PlayerTable from './PlayerTable'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ManagePlayerHeader from './ManagePlayerHeader'

const Home = () => {
    const[players, setPlayers] = useState([])

    //Get All Players
    useEffect(() =>{
        axios.get("http://localhost:9000/api/players")
        .then(res =>{
            console.log(res.data)
            setPlayers(res.data.allPlayers)
        })
    }, [])



    return (
        <div className='w-full flex flex-col items-center'>
            <ManagePlayerHeader/>
            <main className='flex w-full justify-center'>
                <PlayerTable players={players} setPlayers={setPlayers} />
            </main>
        </div>
    )
}

export default Home