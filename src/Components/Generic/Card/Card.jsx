import React, { memo } from 'react';
import styled from 'styled-components';

function getDimension(value) {
    return typeof value === 'string' ? value : (value + 'px');
}

const Base = styled.div`
    width: ${props => props.width ? getDimension(props.width) : 'auto'};
    height: ${props => props.height ? getDimension(props.height) : 'auto'};
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
    background-image: url(${props => props.image});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    filter: ${props => props.disabled ? 'var(--grayscale)' : 'inherit'};
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
    const showData = title || subtitle;

    return (
        <Base width={width} height={height} className={className}>
            <Background disabled={disabled} image={image} />
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