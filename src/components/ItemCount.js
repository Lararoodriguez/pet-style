import {useState} from 'react';
import Button from './helpers/Button';
import 'bootstrap/dist/css/bootstrap.css';



function ItemCount({stock, initial}){
    const [count, setCount] = useState(parseInt(initial));

    const stockMinimo = stock || 0;

    const validateStockAndAdd = (quantity = 0, availableQuantity = 0) => {
        if(quantity < availableQuantity){
                setCount(count + 1);
        }
    };

    const validateStockAndMinus = (quantity = 0) => {
        if(quantity > 0){
            setCount(count - 1);
        }
    };

    return(
        <div>
            <p className="count-display">
            <Button className="resta" action={() => validateStockAndMinus(count)} value={"-"}/>
            <p className="count">{count}</p>
            <Button className="suma" action={() => validateStockAndAdd(count,stockMinimo)} value={"+"}/></p>
            <a href="#" class="btn">Añadir al Carrito</a>
        </div>
    );
}

export default ItemCount;