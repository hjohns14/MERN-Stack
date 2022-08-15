import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import {useState} from 'react';
import { MyContext } from './components/MyContext';
import FormWrapper from './components/FormWrapper';

function App() {
  const [name, setName] = useState('')
  return (
    <>
    <Wrapper>
      <MyContext.Provider value={{name, setName}}>
        <Navbar/>
        <FormWrapper/>
      </MyContext.Provider>
    </Wrapper>
    </>
  );
}

export default App;
