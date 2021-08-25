import {useEffect, useState} from 'react';

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

}

export default ProductDetail;