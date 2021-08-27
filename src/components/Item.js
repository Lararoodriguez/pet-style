import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function Item({id, title, description, price, pictureUrl}){
    return(
        <div className="item-card">
            <div className="item-card-container">
                <img src={pictureUrl} alt={title} />
            </div>
            <div className="item-card-details">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="item-card-details-actions-and-price">      
                    <Link to={`/product/${id}`} className="item-card-detail-gowatch">
                    </Link>
                    <ItemCount stock={5} initial={0}/>
                    <Link to="/" className="item-card-detail-gowatch">
                    </Link>
                    <p><span>${price}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Item;