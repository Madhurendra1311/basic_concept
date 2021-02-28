import './App.css';
import Greet from "./Components/Greet"
import Welcome from "./Components/Welcome"
import Hello from "./Components/Hello"
import Message from "./Components/Message"

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet name="Kunal" heroName="Ram"/>
      <Greet name="Manish" heroName="Shyam"/>
      <Greet name="Raunak" heroName="radha"/> */}
      {/* <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
