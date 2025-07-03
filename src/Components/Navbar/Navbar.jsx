import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [menu, setMenu] = useState(location.pathname.substring(1) || "home");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <p>Fast Food Corner</p>
            </div>
            <ul className='nav-menu'>
                <li className={menu === "home" ? "active" : ""}>
                    <Link to='/' onClick={() => setMenu("home")}>
                        Home
                    </Link>
                    {menu === "home" && <hr className="active-hr" />}
                </li>
                <li className={menu === "about" ? "active" : ""}>
                    <Link to='/about' onClick={() => setMenu("about")}>
                        About
                    </Link>
                    {menu === "about" && <hr className="active-hr" />}
                </li>
                <li className={menu === "menu" ? "active" : ""}>
                    <Link to='/menu' onClick={() => setMenu("menu")}>
                        Menu
                    </Link>
                    {menu === "menu" && <hr className="active-hr" />}
                </li>
                <li className={menu === "contact" ? "active" : ""}>
                    <Link to='/contact' onClick={() => setMenu("contact")}>
                        Contact
                    </Link>
                    {menu === "contact" && <hr className="active-hr" />}
                </li>
            </ul>
            <div className="nav-booking">
                <Link to='/login'><button>Book a Table</button></Link>
            </div>
        </div>
    )
}

export default Navbar;