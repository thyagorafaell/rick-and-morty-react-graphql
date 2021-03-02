import React, { useState } from 'react';
import Search from '../Form/Search/Search';
import Button from '../Form/Button/Button';
import './SearchBox.css';

export default function SearchBox({ className, onSearch }) {
    const [value, setValue] = useState('');

    function submitSearch(event) {
        event.preventDefault();
        onSearch(value);
    }

    return (
        <div className={`search-box ${className}`}>
            <form onSubmit={submitSearch}>
                <Search placeholder={'Search characters'} onChange={setValue} />
                <Button type={'submit'}>{'Search'}</Button>
            </form>
        </div>
    );
}

SearchBox.displayName = 'Components/Generic/SearchBox/SearchBox';