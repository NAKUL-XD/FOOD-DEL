import React, { useState } from 'react';
import './Navbar.css';
import assets from '../../assets/assets';
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");
    const [cartCount, setCartCount] = useState(0);

    return (
        <div className="navbar">
            {/* Logo */}
            <Link to='/'>
                <img src={assets.logo} alt="Logo" className="logo" />
            </Link>

            {/* Menu (Fixed layout) */}
            <ul className="navbar-menu">
                <li><Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link></li>
                <li><a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a></li>
                <li><a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a></li>
                <li><a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a></li>
            </ul>

            {/* Right Section */}
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <SlBasket className="basket" />
                    </Link>
                    {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
