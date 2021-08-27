import carrito from './carrito.png';

function CartWidget() { 
    return ( 
        <div className="navbar2">
         <img src={carrito} className="carrito" alt="carrito"/>
        </div>
    );
}
export default CartWidget;