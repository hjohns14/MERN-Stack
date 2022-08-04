import './App.css';
import HelloWorld from './components/HelloWorld';
import Dash from './components/Dash';

function App() {
  return (
    <div className="App">
      <HelloWorld name={'Bob'} age={90} last_name={'Joe'}/>
      <Dash/>
    </div>
  );
}

export default App;
