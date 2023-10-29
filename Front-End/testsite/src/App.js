import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
    </div>
  );
}

function AboutPage() {
  return (
    <>
    <h1>About</h1>
    <p className="hellomsg">Hello there.<br /> How do you do?</p>
    
    
    </>
  )
}

function MyButton() {
  return(
    <button>I´m a button</button>
  );
}

export default App;
