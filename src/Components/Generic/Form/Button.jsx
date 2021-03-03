import React from 'react';
import styled from 'styled-components';
import Base from './Base';

const Btn = styled.button`
    ${Base}
    cursor: pointer;

    :focus {
        outline: transparent;
        box-shadow: 0 -3px 4px rgba(255, 255, 255, 0.25) inset;
    }
`;

export default function Button(props) {
    const { type = 'button' } = props;

    return <Btn {...props} type={type} />;
}

Button.displayName = 'Components/Generic/Form/Button';