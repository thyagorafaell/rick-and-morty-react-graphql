import React from 'react';
import logo from '../../images/logo.png';
import SearchBox from '../Generic/SearchBox/SearchBox';
import './Header.css';

export default function Header({ onSearch }) {
    return (
        <header className={'header'}>
            <img className={'logo'} src={logo} alt={'Rick & Morty'} />
            <SearchBox className={'text-center'} onSearch={onSearch} />
        </header>
    );
}

Header.displayName = 'Components/Header/Header';