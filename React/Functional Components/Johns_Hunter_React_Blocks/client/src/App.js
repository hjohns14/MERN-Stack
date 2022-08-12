import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Ad from './components/Ad';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='flex h-2/3'>
        <Navbar/>
        <Main>
          <Subcontent/>
          <Subcontent/>
          <Subcontent/>
          <Ad/>
        </Main>
      </main>
    </div>
  );
}

export default App;
