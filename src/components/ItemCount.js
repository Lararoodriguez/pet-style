import {useState} from 'react';
import Button from './helpers/Button';
import 'bootstrap/dist/css/bootstrap.css';
import buzo from './buzopolar.png';


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
        <div className="card">
           <img src={buzo} className="buzoPolar" alt="buzo"/>
           <div className="card-body">
              <h5 className="card-title">Buzo Polar</h5>
              <p className="count-display">
              <Button action={() => validateStockAndMinus(count)} value={"-"}/>
              <p>{count}</p>
              <Button action={() => validateStockAndAdd(count,stockMinimo)} value={"+"}/></p>
              <a href="#" class="btn">Añadir al Carrito</a>
            </div>
        </div>
    );
}

export default ItemCount;