import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/helpers/Button';
import ItemCount from '../components/ItemCount';

function ProductDetail(){

    const [item, setItem] = useState();

    useEffect(() => {
        setTimeout( () => {
            const item = {
                    id: 1,
                    title: 'Buzo Dog Face',
                    description: 'Colores: Azul, Verde, Rojo, Amarillo y Rosa.',
                    price: 2500,
                    pictureUrl: 'https://i.ebayimg.com/images/g/cK4AAOSwyjZfqYwE/s-l1600.jpg'
            };
            setItem(item);
        }, 2000);

    }, []);
    
    return(
        <div className="page-details">
        {item ?
        <div className="product-detail">
            <div className="product-detail-image">
                <img src={`${item.pictureUrl}`} alt={`${item.title}`} />
            </div>
            <div className="product-detail-info">
                <h2>{`${item.title}`}</h2>
                <p>{`${item.description}`}</p>
                <ItemCount stock={5} initial={0}/>
                <div className="product-detail-item-actions">
                    <Link to="/products">
                       Productos 
                    </Link>
                    <Link to="/contact">
                        Contacto
                    </Link>
                </div>
            </div>
        </div>
        : <h3>Cargando</h3> }
        </div>
    );
}

export default ProductDetail;