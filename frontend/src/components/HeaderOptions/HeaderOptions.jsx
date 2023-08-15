import React from 'react';
import { MdMenuBook, MdEditNote } from 'react-icons/md';

import './HeaderOptions.css';

function HeaderOptions() {
    return (
        <div className='header_options'>
            <button type="button" className='btnHeader_options'>
                <span className='icon_options'>
                    <MdMenuBook />
                </span>
                Cardápio
            </button>
            <button type="button" className='btnHeader_options'>
                <span className='icon_options'>
                    <MdEditNote />
                </span> 
                Gerenciar
            </button>
        </div>
        
    );
}

export default HeaderOptions;