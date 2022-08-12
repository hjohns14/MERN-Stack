import './App.css';
import { useState } from 'react';
import Box from './components/Box';

function App() {
  var boxes = []
  const [box, setBox] = useState(boxes)
  const [color, setColor] = useState('')
  const [height, setHeight] = useState('200')

  const handleChange = (e) =>{
    if (e.target.name === "color"){
      setColor(e.target.value.toLowerCase())
    }
    else if (e.target.name === 'height'){
      setHeight(String(e.target.value))
    }
  }

  const formSubmit = (e) =>{
    const newBox = {
      color: color,
      height: height
    } 
    e.preventDefault()   
    setBox([...box, newBox])
    console.log(box)
    setColor('')
    setHeight('200')
  }
  return (
    <div className="App">

      <form className='inputs' onSubmit={formSubmit}>
        <input type="text" name="color" id="color" placeholder='Enter a color' value={color} onChange={handleChange}/>
        <input type="number" name="height" id="height" placeholder='Enter Height' value={height} onChange={handleChange}/>
        <button type='submit'>Add</button>
      </form>
      <div className="boxes">
        {box.map((item, index)=>{
          return <Box item={item} key={index} />
        })
        }
      </div>
    </div>
  );
}

export default App;
