import React, { memo } from 'react';
import Section from '../Generic/Section/Section';

function getGenderPronoum(gender) {
    let pronoum = 'He/She';

    switch (gender) {
        case 'Male':
            pronoum = 'He';
            break;
        case 'Female':
            pronoum = 'She';
            break;
        case 'Genderless':
            pronoum = 'It';
            break;
        case 'unknown':
        default:
            break;
    }

    return pronoum;
}

function getPresentationText(name, status, gender, species) {
    const statusPronoum = status === 'Dead' ? 'was' : 'is';
    const genderText = gender === 'unknown' || gender === 'Genderless' ? '' : gender.toLowerCase();
    const speciesText = species.toLowerCase();

    return `${name} ${statusPronoum} a ${genderText} ${speciesText}.`;
}

function getStatusText(status, gender) {
    const genderPronoum = getGenderPronoum(gender);

    if (status === 'unknown')
        return `It can't be told if ${genderPronoum.toLowerCase()} is alive or dead. `;
    
    if (status === 'Alive')
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

function AboutSection({ data }) {
    return (
        <Section title={'About'}>
            <p>{getAboutText(data)}</p>
        </Section>
    );
};

AboutSection.displayName = 'Components/CharacterModal/AboutSection';

export default memo(AboutSection);