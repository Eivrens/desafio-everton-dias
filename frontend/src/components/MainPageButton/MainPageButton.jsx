import React from 'react';

import './MainPageButton.css';
import HeaderLogo from '../../assets/images/db_logo-header.png';

function MainPageButton() {
    return (
        <button type='button' className='header_logo'>
            <img src={ HeaderLogo } alt="Inicio"/>
        </button>
    );
}

export default MainPageButton;