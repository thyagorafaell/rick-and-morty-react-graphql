import React, { memo } from 'react';
import './Section.css';

function Section({ className, children, title }) {
    return (
        <div className={`w-full ${className ? className : ''}`}>
            { title && <h4 className={'section-title text-yellow'}>{title}</h4> }
            <div className={'section-data'}>
                { children }
            </div>
        </div>
    )
}

Section.displayName = 'Components/Generic/Section/Section';

export default memo(Section);