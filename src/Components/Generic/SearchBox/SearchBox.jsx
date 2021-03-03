import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '../Form/Search';
import Button from '../Form/Button';

const SearchInput = styled(Search)`
    width: 196px;
`;

const SearchButton = styled(Button)`
    margin-left: 16px;
`;

const Container = styled.div``;

export default function SearchBox({ className, onSearch }) {
    const [value, setValue] = useState('');

    function submitSearch(event) {
        event.preventDefault();
        onSearch(value);
    }

    return (
        <div className={className}>
            <form onSubmit={submitSearch}>
                <SearchInput placeholder={'Search characters'} onChange={setValue} />
                <SearchButton type={'submit'}>{'Search'}</SearchButton>
            </form>
        </div>
    );
}

SearchBox.displayName = 'Components/Generic/SearchBox/SearchBox';