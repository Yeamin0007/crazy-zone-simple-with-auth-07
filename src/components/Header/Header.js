import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div className='head-name'>
            <Link to="/"><span className='crazy'>Crazy</span>-Zone</Link>
            </div>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;