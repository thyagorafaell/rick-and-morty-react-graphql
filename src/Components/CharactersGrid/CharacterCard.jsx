import React, { memo } from 'react';
import Card from '../Generic/Card/Card'

/* todo: status unknown */
function CharacterCard({ image, name, onClick, species, status }) {
    return (
        <div onClick={onClick} className={'cursor-pointer'}>
            <Card
                disabled={status === 'Dead'}
                image={image}
                title={name}
                subtitle={species}
                width={224}
                height={224}
            />
        </div>
    );
};

CharacterCard.displayName = 'Components/CharactersGrid/CharacterCard';

export default memo(CharacterCard);