import React from 'react';

export default function Button(props) {
    const { type = 'button' } = props;

    return <button {...props} className={`form-item form-button ${props.className}`} type={type} />;
}

Button.displayName = 'Components/Form/Button/Button';