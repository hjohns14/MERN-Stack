import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom'
import AddPlayer from './components/AddPlayer';

function App() {
  return (
    <>
      <Router>
        <div className='flex justify-center bg-neutral-200 h-24 items-center'>
          <Link to={"/"} className="mx-5 text-blue-500 underline text-4xl focus:text-purple-700">
            Manage players
          </Link>
          <span className='text-4xl'>|</span>
          <Link to={"/status/game/1"} className="mx-5 text-blue-500 underline text-4xl focus:text-purple-700">
            Manage Player Status
          </Link>
        </div>
        <Routes>
          <Route path={"/"} element={<Navigate to={"/players/list"}/>}/>
          <Route path={"/players/list"} element={<Home/>}/>
          <Route path={"/players/add"} element={<AddPlayer/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
