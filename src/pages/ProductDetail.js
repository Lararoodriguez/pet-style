import {useEffect, useState} from 'react';
import ItemCount from '../components/ItemCount';

function ProductDetail(){

    const [item, setItem] = useState();

    useEffect(() => {
        setTimeout( () => {
            const item = {
                id: 1,
                title: 'Buzo Manga Corta',
                description: 'Varios Colores.',
                price: 2500,
                pictureUrl: 'https://i.ebayimg.com/images/g/9~kAAOSwbK5fvNUz/s-l1600.jpg'
            };
            setItem(item);
        }, 2000);

    }, []);

    return(
        <div className="page-details">
         {item ?
        <div className="product-detail">
            <div className="product-detail-info">
                <h2>{`${item.title}`}</h2>
                <p>{`${item.description}`}</p>
                <ItemCount stock={5} initial={0}/>
            </div>
        </div>
        : <h3>Cargando</h3> }
        </div>
    );
}

export default ProductDetail;