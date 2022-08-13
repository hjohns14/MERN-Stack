import './App.css';
import Tabs from './components/Tabs';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState('')

  const tabContent = [
    {
      index: 0,
      content: "Content 1 goes here"
    },
    {
      index: 1,
      content: "Content 2 goes here"
    },
    {
      index: 2,
      content: "Content 3 goes here"
    }
  ]

  // IDK how to un animate them
  function animate(e) {
    let id = null
    let pos = 0
    clearInterval(id)
    id = setInterval(frame, 5)
    function frame(){
      if (pos === -10){
        clearInterval(id)
      }
      else{
        pos--
        e.target.style.top = pos+'px'
        e.target.style.left = pos+'px'
      }
    }
  }

  const handleTabs = (e) => {
    if (e.target.value === '1'){
      setContent(tabContent[0].content)
      
    }
    if (e.target.value === '2'){
      setContent(tabContent[1].content)
    }
    if (e.target.value === '3'){
      setContent(tabContent[2].content)
    }
    animate(e)
    console.log(content)
}

  return (
    <div className="flex justify-center m-8">
      <Tabs onClick={handleTabs} content={content}/>
    </div>
  );
}

export default App;
