import CartWidget from "./Cartwidget";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import { Link } from 'react-router-dom';

function Sidebar() { 
    return ( 
        <div className="navbar2">
            <Logo/>
            <h1 className="titulo">PET STYLE</h1>
            <Link to="/" className="nav-link">
                <span className="link-text">Inicio</span>
            </Link>
            <SidebarItem  text="Productos" path="/products"/>
            <SidebarItem  text="Contacto" path="/contact"/>
            <CartWidget/>
        </div>
    );
}
export default Sidebar;