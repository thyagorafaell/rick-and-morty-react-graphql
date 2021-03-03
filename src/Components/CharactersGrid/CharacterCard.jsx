import React, { memo } from 'react';
import styled from 'styled-components';
import Card from '../Generic/Card/Card'
import { STATUS_DEAD } from '../../constants/apiData';

const Container = styled.div`
    cursor: pointer;
`;

function CharacterCard({ image, name, onClick, species, status }) {
    return (
        <Container onClick={onClick}>
            <Card
                disabled={status === STATUS_DEAD}
                image={image}
                title={name}
                subtitle={species}
                width={224}
                height={224}
            />
        </Container>
    );
};

CharacterCard.displayName = 'Components/CharactersGrid/CharacterCard';

export default memo(CharacterCard);