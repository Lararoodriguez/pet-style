import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="titulo">Pet Style</h1>
      </header>
      <NavBar/>
      <main>
        <ItemListContainer greeting="Bienvenidos a Pet Style :)"/>
      </main>
    </div>
  );
}

export default App;
