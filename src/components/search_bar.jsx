import React from 'react';
import './search_bar.css'

const SearchBar = () => {
    return (
        <div className="container search_bar">
            <input className="search_tool" placeholder='Поиск...'/>
            <div className="btn_search">
                <i className='fa fa-search'></i>
            </div>
        </div>
    );
}

export default SearchBar;
