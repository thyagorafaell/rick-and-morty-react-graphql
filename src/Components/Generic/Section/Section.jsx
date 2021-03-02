import React, { memo } from 'react';
import './Section.css';

function Section({ children, title }) {
    return (
        <div className={'w-full'}>
            <h4 className={'section-title text-yellow'}>{title}</h4>
            <div className={'section-data'}>
                { children }
            </div>
        </div>
    )
}

Section.displayName = 'Components/Generic/Section/Section';

export default memo(Section);