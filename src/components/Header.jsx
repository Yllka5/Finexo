import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <div className="logo">Finexo</div>
            
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            <nav className={isMenuOpen ? "active" : ""}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Service</Link>
                <Link to="/team">Team</Link>
                <Link to="/whyus">WhyUs</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;
