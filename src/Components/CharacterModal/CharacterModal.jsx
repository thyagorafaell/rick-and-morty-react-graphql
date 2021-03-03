import { useQuery } from '@apollo/react-hooks';
import React, { Fragment, memo } from 'react';
import styled from 'styled-components';
import CharacterModalCard from './CharacterModalCard';
import Modal from '../Generic/Modal/Modal';
import Section from '../Generic/Section/Section';
import AboutSection from './AboutSection';
import LocationSection from './LocationSection';
import { CHARACTER } from '../../constants/queries';
import { ERROR } from '../../constants/messages';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0,1fr));
    height: 100%;
`;

const CardPresentationContainer = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: grid;
        grid-column: span 2/span 2;
        grid-template-columns: repeat(1, minmax(0,1fr));
    }
`;

const CardPlaceholder = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    filter: var(--blur) var(--darkness);
    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: 1;
    grid-row-end: 1;
`;

const Data = styled.div`
    background-color: var(--black);
    color: var(--white);
    display: grid;
    gap: 2em;
    grid-column: span 5/span 5;
    grid-template-columns: repeat(1, minmax(0,1fr));
    padding: 3em 4em;
    overflow: auto;
    z-index: 10;

    @media (min-width: 768px) {
        grid-column: span 3/span 3;
    }
`;

function CharacterModal({ card, onClose }) {
    const { loading, error, data } = useQuery(CHARACTER, {
		variables: {
			id: card.id
		}
	});

    return (
        <Modal onClose={onClose}>
            <Container>
                <Fragment>
                    <CardPresentationContainer>
                        <CardPlaceholder image={card.image}></CardPlaceholder>
                        <CharacterModalCard {...card} />
                    </CardPresentationContainer>
                    <Data>
                        { data && (
                            <Fragment>
                                <AboutSection data={data.character} image={card.image} />
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
                    </Data>
                </Fragment>
            </Container>
        </Modal>
    );
};

CharacterModal.displayName = 'Components/CharacterModal/CharacterModal';

export default memo(CharacterModal);