import React from 'react';
import Base from './Base';
import styled from 'styled-components';

const Input = styled.input`
    ${Base}
`;

export default function InputBase(props) {
    function onChange(event) {
        return props.onChange && props.onChange(event.target.value, event);
    }

    return <Input {...props} onChange={onChange} />;
}

InputBase.displayName = 'Components/Generic/Form/InputBase/InputBase';