import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home';

// TODO: 
// 1. Figure out jwt and cookie-parser for validation
//    - use session storage in the mean time for exam
// 2. Set up session storage



function App() {
  const validated = window.sessionStorage.getItem("loggedIn")

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={
            validated ?
              <Navigate to="/home" /> :
              <Navigate to={"/register"} />
          } />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
