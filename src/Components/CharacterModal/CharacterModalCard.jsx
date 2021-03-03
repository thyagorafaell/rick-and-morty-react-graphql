import React, { memo } from 'react';
import styled from 'styled-components';
import Card from '../Generic/Card/Card'
import { STATUS_DEAD } from '../../constants/apiData';

const Container = styled.div`
    width: 35%;
    height: 65%;
    max-width: 400px;
    max-height: 470px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: -3vw;
    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: 1;
    grid-row-end: 1;
    position: absolute;
`;

function CharacterModalCard({ image, name, species, status }) {
    return (
        <Container>
            <Card
                disabled={status === STATUS_DEAD}
                image={image}
                title={name}
                subtitle={species}
                width={'100%'}
                height={'100%'}
            />
        </Container>
    );
};

CharacterModalCard.displayName = 'Components/CharactersModal/CharacterModalCard';

export default memo(CharacterModalCard);