import { Link } from 'react-router-dom';

function SidebarItem({text, path}){
    if(!path){
        path = '/';
    }

    return(
        <div className="nav-item2">
            <Link to={path} className="nav-link">
                <span className="link-text">{text}</span>
            </Link>
        </div>
    );
}
export default SidebarItem;