import logo from './logo.svg';
import { Link } from 'react-router-dom' 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mark Spannbauer
          Portfolio Coming Soon
        </p>
        <Link to="/css">CSS Builder</Link>
      </header>
    </div>
  );
}

export default App;
