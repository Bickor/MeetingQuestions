import logo from './shpe_logo.jpg';
import Questions from './Questions.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="SHPE-logo" alt="logo" />
        <h1> General Meeting Questions </h1>
        <hr size="10px" width="85%" color="white"></hr>
        <Questions />
      </header>
    </div>
  );
}

export default App;
