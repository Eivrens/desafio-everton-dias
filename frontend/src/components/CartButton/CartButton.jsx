import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import './CartButton.css';

function CartButton() {
    return (
        <button type='button' className='cart_button'>
            <FaShoppingCart />
            <span className='cart_status'>1</span>
        </button>
    );
}

export default CartButton;