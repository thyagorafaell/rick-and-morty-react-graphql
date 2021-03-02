import React from 'react';

export default function InputBase(props) {
    function onChange(event) {
        return props.onChange && props.onChange(event.target.value, event);
    }

    return <input {...props} className={`form-item form-input ${props.className}`} onChange={onChange} />;
}

InputBase.displayName = 'Components/Form/InputBase/InputBase';