import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import Search from '../Generic/Form/Search';
import SearchBox from '../Generic/SearchBox/SearchBox';

const Img = styled.img`
    width: auto;
    max-width: 100%;

    @media (min-height: 640px) {
        margin: 38px auto;
    }
`;

const Box = styled(SearchBox)`
    margin: 38px 0;
    text-align: center;
    
    ${Search} {
        width: 196px;
        max-width: 100%;
    }
`;

export default function Header({ onSearch }) {
    return (
        <header>
            <Img src={logo} alt={'Rick & Morty'} />
            <Box onSearch={onSearch} />
        </header>
    );
}

Header.displayName = 'Components/Header/Header';