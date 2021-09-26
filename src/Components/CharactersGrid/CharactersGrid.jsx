import React, { useState } from 'react';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import CharacterModal from '../CharacterModal/CharacterModal';

const Grid = styled.section`
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(1, minmax(0,1fr));

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, minmax(0,1fr));
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, minmax(0,1fr));
    }
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, minmax(0,1fr));
    }
`;

export default function CharactersGrid(props) {
    let [modalData, setModalData] = useState(null);
    
    const closeModal = () => setModalData(null);
    const cards = props.cards.map(card => <CharacterCard key={card.id} {...card} onClick={() => setModalData(card)} />);
    const modal = modalData && <CharacterModal onClose={closeModal} card={modalData} />

    return (
        <Grid>
            { modal }
            { cards }
        </Grid>
    );
}

CharactersGrid.displayName = 'Components/CharactersGrid/CharactersGrid';