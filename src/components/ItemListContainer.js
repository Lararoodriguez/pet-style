import ItemList from "./ItemList";
import { useEffect, useState } from "react";

function ItemListContainer(){

    const [items, setItems] = useState();

    useEffect(() => {

        setTimeout( () => {
            const items = [
                {
                    id: 1,
                    title: 'Buzo Dog Face',
                    description: 'Colores: Rosa, Negro, Rojo, Gris',
                    price: 2500,
                    pictureUrl: 'https://i.ebayimg.com/images/g/cK4AAOSwyjZfqYwE/s-l1600.jpg'
                },
                {
                    id: 2,
                    title: 'Buzo Rayas',
                    description: 'Colores: Blanco con Rayas Negras , Blanco con Rayas Marrones',
                    price: 1500,
                    pictureUrl: 'https://i.ebayimg.com/images/g/KioAAOSw2CJan15H/s-l1600.jpg'
                },
                {
                    id: 3,
                    title: 'Buzo Adidog',
                    description: 'Colores: Rosa, Negro, Rojo, Gris',
                    price: 2000,
                    pictureUrl: 'https://i.ebayimg.com/images/g/sPwAAOSwiCFeCBtm/s-l1600.jpg'
                },
            ];

            setItems(items);
            
        }, 2000);
    }, []);
    return(
        <div>
            <ItemList items={items} title={'Productos'}/>
        </div>
    );
}

export default ItemListContainer;