import React from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <>

            <div className='header'>
                <Link to="/">Home</Link>
                <Link to="/blogs">About React</Link>
                <Link to="/contacts">Contact</Link>
            </div>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <Outlet />
        </>
    )
}

export default Header
