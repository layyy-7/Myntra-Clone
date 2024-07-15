import {Link} from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import {useSelector} from "react-redux";

function Header()
{
    let bag=useSelector(store=>store.bag);

    return(
        <header>
            <div className="logo_container">
                <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
            </div>
            <nav className="nav_bar">
                <span>Men</span>
                <span>Women</span>
                <span>Kids</span>
                <span>Home & Living</span>
                <span>Beauty</span>
                <span>Studio <sup>New</sup></span>
            </nav>
            <div className="search_bar">
                <span className="material-symbols-outlined search_icon">search</span>
                <input className="search_input" placeholder="Search for products, brands and more"/>
            </div>
            <div className="action_bar">
                <div className="action_container">
                    <IoPerson/>
                    <span className="action_name">Profile</span>
                </div>
    
                <div className="action_container">
                    <FaHeart/>
                    <span className="action_name">Wishlist</span>
                </div>
    
                <Link className="action_container" to="/bag">
                    <IoBag/>
                    <span className="action_name">Bag</span>
                    <span className="bag-item-count">{bag.length}</span>
                </Link>
            </div>
        </header>
    )
}

export default Header;