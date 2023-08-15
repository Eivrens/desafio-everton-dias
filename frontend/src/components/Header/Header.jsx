import React from 'react';

import './Header.css';

import SearchBar from '../SearchBar/SearchBar';
import MainPageButton from '../MainPageButton/MainPageButton';
import CartButton from '../CartButton/CartButton';
import HeaderOptions from '../HeaderOptions/HeaderOptions';

function Header() {
    return (
        <header className='header'>

            <div className='container'>
                <MainPageButton />
                <HeaderOptions />
                <SearchBar />                
                <CartButton />
            </div>
            
        </header>
    );
}

export default Header;