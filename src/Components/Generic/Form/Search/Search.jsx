import React from 'react';
import InputBase from '../InputBase/InputBase';

export default function Search(props) {
    return <InputBase {...props} className={`form-input-search ${props.className}`} type={'search'} />;
}

Search.displayName = 'Components/Form/Search/Search';