import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const people =[
    {
      firstName: "Jane",
      lastName: "doe",
      age: 45,
      hairColor: "Brown"
    },
    {
      firstName: "Jim",
      lastName: "Jimmerson",
      age: 25,
      hairColor: "Blonde"
    },
    {
      firstName: "Jimothy",
      lastName: "Richards",
      age: 15,
      hairColor: "Black"
    }
  ]
  return (
    <div className="App">
      {people.map((item,idx) =>(
        <PersonCard firstName={item.firstName} lastName={item.lastName}
        age={item.age} hairColor={item.hairColor} key={idx}/>
      ))}
    </div>
  );
}

export default App;
