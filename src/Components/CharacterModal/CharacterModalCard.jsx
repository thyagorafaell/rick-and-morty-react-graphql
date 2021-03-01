import React, { memo } from 'react';
import Card from '../Card/Card'

function CharacterModalCard({ image, name, species, status }) {
    return (
        <div className={'character-modal-card'}>
            <Card
                disabled={status === 'Dead'}
                image={image}
                title={name}
                subtitle={species}
                width={'40vh'}
                height={'50vh'}
            />
        </div>
    );
};

CharacterModalCard.displayName = 'Components/CharactersModal/CharacterModalCard';

export default memo(CharacterModalCard);