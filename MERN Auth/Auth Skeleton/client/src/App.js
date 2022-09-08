import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Register from './components/Register'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Register/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
