import React, { memo } from 'react';
import Card from '../Generic/Card/Card'
import { STATUS_DEAD } from '../../constants/apiData';

function CharacterModalCard({ image, name, species, status }) {
    return (
        <div className={'character-modal-card'}>
            <Card
                disabled={status === STATUS_DEAD}
                image={image}
                title={name}
                subtitle={species}
                width={'100%'}
                height={'100%'}
            />
        </div>
    );
};

CharacterModalCard.displayName = 'Components/CharactersModal/CharacterModalCard';

export default memo(CharacterModalCard);