import logo from './logo.svg';
import './App.css';
function sayHello() {
  alert('You clicked me!');
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <button onClick={sayHello}>Default</button>
          Learn React
        <div className = "Earn-Money-image"><p>Earn money image</p></div>
        <div className = "Set-goal"><p>Set goal</p></div>
        <div className = "Saving-account"><p>Saving account</p></div>
      </header>
    </div>
  );
}

export default App;
