import './App.css';
import PersonalCard from './components/PersonalCard';
import SyntheticEvents from './components/SyntheticEvents';

function App() {
  return (
    <div className="App">
      <PersonalCard
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hairColor={"Black"}
      />
      <PersonalCard
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hairColor={"Brown"}
      />
      <PersonalCard
        firstName={"Millard"}
        lastName={"Fillmore"}
        age={50}
        hairColor={"Brown"}
      />
      <PersonalCard
        firstName={"Mancy"}
        lastName={"Richards"}
        age={25}
        hairColor={"Blonde"}
      />
      <SyntheticEvents/>
    </div>
  );
}

export default App;
