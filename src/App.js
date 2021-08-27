import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Products from './pages/Products';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar/>
        <main>
          <Switch>
            <Route exact path="/">
              <Offers/>
            </Route>
            <Route exact path="/products">
              <Products/>
            </Route>
            <Route exact path="/product/:id">
              <ProductDetail/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;