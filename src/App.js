import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="titulo">Pet Style</h1>
      </header>
      <NavBar/>
      <main>
        <ItemListContainer/>
        <ItemCount stock= {5} initial={0}/>
        <Switch>
            <Route exact path="/product/:id">
              <ProductDetail/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
        </Switch>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
