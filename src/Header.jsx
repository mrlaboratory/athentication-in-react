import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <ul>
            <li className='flex justify-center'>
                <Link className='btn' to='/'>Home</Link>
                <Link className='btn' to="/about">About</Link>
                <Link className='btn' to="/contact">Contact</Link>
                <Link className='btn' to="login">Login</Link>
                <Link className='btn' to="signup">Signup</Link>
            </li>
           </ul>
        </div>
    );
};

export default Header;