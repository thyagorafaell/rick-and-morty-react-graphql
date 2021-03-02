import React, { memo } from 'react';
import Card from '../Generic/Card/Card'
import { STATUS_DEAD } from '../../constants/apiData';

/* todo: status unknown */
function CharacterCard({ image, name, onClick, species, status }) {
    return (
        <div onClick={onClick} className={'cursor-pointer'}>
            <Card
                disabled={status === STATUS_DEAD}
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