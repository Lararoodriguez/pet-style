import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="titulo">Pet Style</h1>
      </header>
      <NavBar/>
      <body>
        <h2 className="titulo">Accesorios,Abrigos,Collares y Mucho más!</h2>
      </body>
    </div>
  );
}

export default App;
