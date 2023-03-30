import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='mb-5 border-bottom pb-2 bg-light pt-3'>
            <nav className='d-flex justify-content-between p-3'>
                <h1>Movies Hub</h1>
                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <input className='p-2 rounded' type="text" placeholder='Search'/>
                    <button className='btn btn-dark py-2 px-4'>Search</button>
                </div>
            </nav>

        </div>
    );
};

export default Header;