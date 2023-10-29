import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

function MyButton() {
  return(
    <button>I´m a button</button>
  );
}

export default App;
