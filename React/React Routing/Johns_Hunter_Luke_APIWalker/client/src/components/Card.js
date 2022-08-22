import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const Card = (props) => {
    const { state, searchFor, url } = props
    const [secondary, setSecondary] = useState()
    let secondURL = ''

    // useEffect(() =>{
            
    //     axios.get(secondURL)
    //     .then(results =>{
    //         setSecondary(results.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         setSecondary({name: ''})
    //     })
    // }, [secondURL, secondary])

    function searchResultsRender() {
        if (searchFor === "people"){
            return <>
            <h1 className='text-xl font-bold'>{state.name}</h1>
            <h2>Birth year: {state.birth_year}</h2>
            <h2>Height: {state.height} cm</h2>
            <h1>Weight: {state.mass} kg</h1>
            <h2>Hair Color: {state.hair_color}</h2>
            <h2>Eye Color: {state.eye_color}</h2>
            <h3>Gender: {state.gender}</h3>
            {/* <h3>Homeworld: {secondary.name}</h3> */}
            </>
        }else if (searchFor === "planets"){
            return <>
            <h1 className='text-xl font-bold'>{state.name}</h1>
            <h2>Climate: {state.climate}</h2>
            <h1>Terrain: {state.terrain}</h1>
            <h1>Day Length: {state.rotation_period} Standard Hours</h1>
            <h1>Year Length: {state.orbital_period} Standard Days</h1>
            <h2>Diameter: {state.diameter}</h2>
            <h1>Population: {state.population}</h1>
            </>
        }else if (searchFor === "starships"){
            return <>
            <h1 className='text-xl font-bold'>{state.name}</h1>
            <h2>Model: {state.model}</h2>
            <h2>Manufacturer: {state.manufacturer}</h2>
            <h1>Cost: {state.cost_in_credits} credits</h1>
            <h1>Length: {state.length} meters</h1>
            <h1>Max atmosphere speed: {state.max_atmosphering_speed}</h1>
            <h1>Class: {state.starship_class}</h1>
            </>
        }else if (searchFor === "vehicles"){
            return <>
            <h1 className='text-xl font-bold'>{state.name}</h1>
            <h2>Model: {state.model}</h2>
            <h2>Manufacturer: {state.manufacturer}</h2>
            <h1>Cost: {state.cost_in_credits} credits</h1>
            <h1>Length: {state.length} meters</h1>
            <h1>Max atmosphere speed: {state.max_atmosphering_speed}</h1>
            <h1>Class: {state.vehicle_class}</h1>
            </>
        }
        else if (searchFor === "films"){
            return <>
            <h1 className='text-xl font-bold'>{state.title}</h1>
            <h2>Episode: {state.episode_id}</h2>
            <h1>Director: {state.director}</h1>
            <h1>Producer(s): {state.producer}</h1>
            <h1>Release Date: {state.release_date}</h1>
            </>
        }
        else if (searchFor === "species"){
            return <>
            <h1 className='text-xl font-bold'>{state.name}</h1>
            <h2>Classification: {state.classification}</h2>
            <h1>Designation: {state.designation}</h1>
            <h1>Average Height: {state.average_height} cm</h1>
            <h1>Average Lifespan: {state.average_lifespan} Standard Years</h1>
            <h1>Language: {state.language}</h1>
            </>
        }
    }



    return (
        <div className='flex flex-col items-center'>
            <div className='p-5 w-[30rem] h-64 border border-neutral-500 rounded-md bg-slate-300 flex flex-col justify-around'>
                {searchResultsRender()}
            </div>
        </div>
    )
}

export default Card
