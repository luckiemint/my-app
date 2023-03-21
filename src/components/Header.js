import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className='header'>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contacts">Contact</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Header
