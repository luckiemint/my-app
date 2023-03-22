import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import Student from './Student';

const Home = () => {

    let navigate = useNavigate();
    const goImages = () => {
        navigate("/images");
    };
    const goTodo = () => { navigate("/todo"); };

    return (
        <div className='page'>
            <Header />
            <div className='mainContainer'>
                <Student
                // name='Showy'
                // age={25}
                />
                {/* <Student
                name='Rosy'
                age={25}
                /> */}
                <div className='btnContainer'>
                    <button onClick={goTodo}>TodoList</button>
                    <button onClick={goImages}>Images</button>
                </div>



            </div>




            <Outlet />
        </div>
    )
}

export default Home
