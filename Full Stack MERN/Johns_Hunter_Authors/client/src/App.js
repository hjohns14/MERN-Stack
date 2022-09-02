import './App.css';
import AllAuthors from './components/AllAuthors';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EditAuthor from './components/EditAuthor';
import CreateAuthor from './components/CreateAuthor';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AllAuthors/>}/>
          <Route path='/new' element={<CreateAuthor/>}/>
          <Route path='/edit/:id' element={<EditAuthor/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
