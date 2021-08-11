import ItemList from "./ItemList";
import { useEffect, useState } from "react";

function ItemListContainer({greeting}){
    const [items, setItems] = useState();
    useEffect(() => {
        setTimeout( () => {
            const items = [
                {
                    id: 1,
                    title: 'Buzo Manga Corta',
                    description: 'Varios Colores.',
                    price: 2500,
                    pictureUrl: 'https://i.ebayimg.com/images/g/9~kAAOSwbK5fvNUz/s-l1600.jpg'
                },
                {
                    id: 2,
                    title: 'Buzo Woof',
                    description: 'Color Blanco y Negro.',
                    price: 3000,
                    pictureUrl: 'https://i.ebayimg.com/images/g/LuwAAOSwZzVeGG5g/s-l1600.png'
                }
            ];
            setItems(items);
        }, 2000);

    }, []);

    return(
        <div>
            <p>{greeting}</p>
            <ItemList items={items} title={'Productos'}/>
        </div>
    );
}

export default ItemListContainer;