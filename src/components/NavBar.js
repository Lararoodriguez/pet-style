import 'bootstrap/dist/css/bootstrap.min.css';
import  carrito from './carrito.png';


function NavBar() { 
  return ( 
    <header className="header col-sm-12">
      <div className="header-title-and-icon col-md-4 col-sm-12"> </div>
      <div className="header-category-sections col-md-4 col-sm-12">
        <p><a href="https://coderhouse.com">Productos</a></p>
        <p><a href="https://coderhouse.com">Ofertas</a></p>
        <p><a href="https://coderhouse.com" path="/contact">Contacto</a></p>
      </div>
      <img src={carrito} className="carrito" alt="carrito" />
    </header>
  );
}

export default NavBar;