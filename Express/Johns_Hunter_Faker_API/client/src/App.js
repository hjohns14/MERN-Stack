import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { faker } from '@faker-js/faker'

function App() {

  useEffect(() =>{
    axios.get("http://localhost:9000/api")
    .then(res =>{
      console.log(res)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])

  const createProduct = () =>{
    const newFake ={
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      department: faker.commerce.department(),
      
    }
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
