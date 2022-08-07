import './App.css';
import Base from './components/Base';
import Nav from './components/Nav';
import HelloWorld from './components/HelloWorld';

function App() {
  const obj = {
    name: 'bob',
    age: 99
  }
  return (
    <div className="App">
      <Base>
        <Nav/>
          <HelloWorld name={obj.name} age={obj.age}/>
      </Base>
    </div>
  );
}

export default App;
