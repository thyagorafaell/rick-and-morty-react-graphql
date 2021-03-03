import React, { memo } from 'react';
import styled from 'styled-components';
import './Card.css';

const Base = styled.div`
    border: 2px solid var(--gray);
    border-radius: 8px;
    overflow: hidden;

    :hover, :active {
        border: 2px solid var(--yellow);
        box-shadow: 0px 6px 7px rgba(203, 215, 54, 0.25);
    }
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
`;

const Data = styled.div`
    background: rgba(30, 30, 30, 0.8);
    backdrop-filter: var(--blur);
    bottom: 0;
    color: var(--white);
    min-height: 55px;
    padding: 10px;
    position: sticky;
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
`;

const Subtitle = styled.p`
    font-size: 12px;
    line-height: 15px;
`;

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
        <Base className={`card-action ${className} ${stateClass}`} style={cardStyleFromProps}>
            <Background className={'card-background'} style={cardBackgroundStyleFromProps} />
            { showData && (
                <Data>
                    { title && <Title>{title}</Title> }
                    { subtitle && <Subtitle>{subtitle}</Subtitle> }
                </Data>
            )}
        </Base>
    );
}

Card.displayName = 'Components/Generic/Card/Card';

export default memo(Card);