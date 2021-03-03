import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import Search from '../Generic/Form/Search';
import SearchBox from '../Generic/SearchBox/SearchBox';

const Img = styled.img`
    margin: 38px;
`;

const Box = styled(SearchBox)`
    margin: 38px;
    text-align: center;
    
    ${Search} {
        width: 196px;
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