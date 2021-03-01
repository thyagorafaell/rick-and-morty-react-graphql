import React, { memo } from 'react';
import './Card.css';

function Card({ className = '', disabled, image, title, subtitle, width, height }) {
    const stateClass = disabled ? 'card--disabled' : 'card--enabled';
    const showData = title || subtitle;

    const cardStyleFromProps = {
        width, height
    };

    const cardBackgroundStyleFromProps = {
        backgroundImage: `url(${image})`
    };

    return (
        <div className={`card card-action overflow-hidden ${className} ${stateClass}`} style={cardStyleFromProps}>
            <div className={'card-background bg-cover bg-no-repeat bg-top h-full w-full'} style={cardBackgroundStyleFromProps}></div>
            { showData && (
                <div className={'card-data sticky'}>
                    { title && <p className={'card-title font-bold'}>{title}</p> }
                    { subtitle && <p className={'card-subtitle'}>{subtitle}</p> }
                </div>
            )}
        </div>
    );
}

Card.displayName = 'Components/Card/Card';

export default memo(Card);