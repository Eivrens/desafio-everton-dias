import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');
    console.log(searchValue);
    const handleChangeValues = (value) => {
        
        setSearchValue((prevSearchValue) => ({
            ...prevSearchValue,
            [value.target.name]: value.target.value,
        }));
    };

    return (
        <form className='search_bar'>
            <input
                type="search"
                name="search"
                value={searchValue}
                className="search_products"
                placeholder="Procurar produtos"
                //onChange={({ target }) => setSearchValue( target.value )}
                onChange={handleChangeValues}
                required
            />
            <button type="submit" className="search_button">
                <BsSearch />
            </button>
        </form>
    );
}

export default SearchBar;
