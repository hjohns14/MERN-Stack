import './App.css';
import { useState } from 'react';
import Box from './components/Box';

function App() {
  var boxes = []
  const [box, setBox] = useState(boxes)
  const [color, setColor] = useState('')

  const handleChange = (e) =>{
    setColor(e.target.value.toLowerCase())
  }

  const formSubmit = (e) =>{
    const newBox = {
      color: color
    } 
    e.preventDefault()   
    setBox([...box, newBox])
    console.log(box)
  }
  return (
    <div className="App">

      <form className='inputs' onSubmit={formSubmit}>
        <input type="text" name="color" id="color" placeholder='Enter a color' value={color} onChange={handleChange}/>
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
