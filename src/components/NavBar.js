import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() { 
  return ( 
    <header className="header col-sm-12">
      <div className="header-title-and-icon col-md-4 col-sm-12"> </div>
      <div className="header-category-sections col-md-4 col-sm-12">
        <p><a href="https://coderhouse.com">Productos</a></p>
        <p><a href="https://coderhouse.com">Ofertas</a></p>
        <p><a href="https://coderhouse.com">Contacto</a></p>
      </div>
    </header>
  );
}

export default NavBar;