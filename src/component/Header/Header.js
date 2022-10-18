import React, { useState } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='header flex items-center justify-between px-8'>
            <img src={logo} alt="" />
            <div className='flex'>

                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    {open ? <FontAwesomeIcon className='w-8 h-8' icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon className='w-8 h-8' icon={faBars}></FontAwesomeIcon>}
                </div>

                <ul className={`md:flex w-full my-5 p-2 text-center ul-content duration-500 ease-in absolute md:sticky ${open ? 'right-0 top-12 z-10' : 'right-[-500px] top-12 z-10'}`}>
                    <li>
                        <Link to="/shop">Shop</Link
                        ></li>
                    <li>
                        <Link to="/orders">Orders</Link
                        ></li>
                    <li>
                        <Link to="/inventory">Inventory</Link
                        ></li>
                    <li>
                        <Link to="/about">About</Link
                        ></li>
                    <li>
                        <Link to="/login">Login</Link
                        ></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;