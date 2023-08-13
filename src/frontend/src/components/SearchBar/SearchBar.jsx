import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');

    return (
        <form className='search_bar'>
            <input
                type="search"
                value={searchValue}
                className="search_products"
                placeholder="Procurar produtos"
                onChange={({ target }) => setSearchValue( target.value )}
                required
            />
            <button type="submit" className="search_button">
                <BsSearch />
            </button>
        </form>
    );
}

export default SearchBar;
