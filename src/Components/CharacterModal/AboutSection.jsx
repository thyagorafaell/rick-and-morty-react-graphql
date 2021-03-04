import React, { memo } from 'react';
import styled from 'styled-components';
import Card from '../Generic/Card/Card';
import Section from '../Generic/Section/Section';
import { UNKNOWN, GENDER_FEMALE, GENDER_GENDERLESS, GENDER_MALE, STATUS_ALIVE, STATUS_DEAD } from '../../constants/apiData';

const Content = styled.div`
    align-items: center;
    display: flex;
`;

const CardContainer = styled.div`
    padding-right: 15px;

    @media (min-width: 768px) {
        display: none;
    }
`;

function getGenderPronoum(gender) {
    let pronoum = 'He/She';

    switch (gender) {
        case GENDER_MALE:
            pronoum = 'He';
            break;
        case GENDER_FEMALE:
            pronoum = 'She';
            break;
        case GENDER_GENDERLESS:
            pronoum = 'It';
            break;
        case UNKNOWN:
        default:
            break;
    }

    return pronoum;
}

function getPresentationText(name, status, gender, species) {
    const statusPronoum = status === STATUS_DEAD ? 'was' : 'is';
    const genderText = gender === UNKNOWN || gender === GENDER_GENDERLESS ? '' : gender.toLowerCase();
    const speciesText = species.toLowerCase();

    return `${name} ${statusPronoum} a ${genderText} ${speciesText}.`;
}

function getStatusText(status, gender) {
    const genderPronoum = getGenderPronoum(gender);

    if (status === UNKNOWN)
        return `It can't be told if ${genderPronoum.toLowerCase()} is alive or dead. `;
    
    if (status === STATUS_ALIVE)
        return `${genderPronoum} is alive and well. `;

    return `${genderPronoum} is ${status.toLowerCase()}. `;
}

function getLastEpisodeText(episodes) {
    const episode = episodes && episodes.length > 0 && episodes[episodes.length - 1];

    return episode ? `Last seen ${episode.air_date}.` : '';
}

function getAboutText({ name, gender, species, status, episode }) {
    const presentationText = getPresentationText(name, status, gender, species);
    const statusText = getStatusText(status, gender);
    const lastSeenText = getLastEpisodeText(episode);

    return `${presentationText} ${statusText} ${lastSeenText}`;
}

function AboutSection({ data, image }) {
    return (
        <Section title={'About'}>
            <Content>
                <CardContainer>
                    <Card disabled={data.status === STATUS_DEAD} image={image} width={100} height={100} />
                </CardContainer>
                <p>{getAboutText(data)}</p>
            </Content>
        </Section>
    );
};

AboutSection.displayName = 'Components/CharacterModal/AboutSection';

export default memo(AboutSection);