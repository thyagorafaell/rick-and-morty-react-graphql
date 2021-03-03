import React from 'react';
import InputBase from './InputBase';

export default function Search(props) {
    return <InputBase {...props} type={'search'} />;
}

Search.displayName = 'Components/Generic/Form/Search';