import { useQuery } from '@apollo/react-hooks';
import React, { Fragment, memo } from 'react';
import CharacterModalCard from './CharacterModalCard';
import Modal from '../Generic/Modal/Modal';
import Section from '../Generic/Section/Section';
import AboutSection from './AboutSection';
import LocationSection from './LocationSection';
import { CHARACTER } from '../../constants/queries';
import { ERROR } from '../../constants/messages';
import './CharacterModal.css';

const placeholderStyle = {
    filter: 'var(--blur) var(--darkness)'
};

function CharacterModal({ card, onClose }) {
    const placeholderComputedStyle = {
        ...placeholderStyle,
        backgroundImage: `url(${card.image})`
    };

    const { loading, error, data } = useQuery(CHARACTER, {
		variables: {
			id: card.id
		}
	});

    return (
        <Modal onClose={onClose}>
            <div className={'grid grid-cols-5 h-full'}>
                <Fragment>
                    <div className={'grid grid-cols-1 col-span-2'}>
                        <div className={'character-modal-card-placeholder w-full h-full bg-center bg-cover'} style={placeholderComputedStyle}></div>
                        <CharacterModalCard {...card} />
                    </div>
                    <div className={'character-modal-data-grid grid grid-cols-1 col-span-3 bg-black overflow-auto text-white z-10'}>
                        { data && (
                            <Fragment>
                                <AboutSection data={data.character} />
                                <LocationSection title={'Origin'} data={data.character.origin} />
                                <LocationSection title={'Location'} data={data.character.location} />
                            </Fragment>
                        )}
                        {
                            error && (
                                <Section title={'Error :/'}>
                                    <p>{ERROR}</p>
                                </Section>
                            )
                        }
                        { loading && <Section title={'Loading...'} /> }
                    </div>
                </Fragment>
            </div>
        </Modal>
    );
};

CharacterModal.displayName = 'Components/CharacterModal/CharacterModal';

export default memo(CharacterModal);