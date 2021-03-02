import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterModal from '../CharacterModal/CharacterModal';
import './CharactersGrid.css';

export default function CharactersGrid(props) {
    let [modalData, setModalData] = useState(null);
    
    const closeModal = () => setModalData(null);
    const cards = props.cards.map(card => <CharacterCard key={card.id} {...card} onClick={() => setModalData(card)} />);
    const modal = modalData && <CharacterModal onClose={closeModal} card={modalData} />

    return (
        <div className={'card-grid grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'}>
            { modal }
            { cards }
        </div>
    );
}

CharactersGrid.displayName = 'Components/CharactersGrid/CharactersGrid';