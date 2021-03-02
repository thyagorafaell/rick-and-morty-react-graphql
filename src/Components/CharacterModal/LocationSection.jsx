import React, { memo } from 'react';
import Section from '../Generic/Section/Section';
import People from '../../images/people.png';
import { UNKNOWN } from '../../constants/apiData';
import './LocationSection.css';

const empytValues = {
    dimension: 'Unknown dimension',
    name: 'Unknown',
    type: 'Unknown planet'
};

function getLocationData(data) {
    const { dimension, name, residents, type } = data;

    return {
        dimension: dimension === UNKNOWN || dimension === null ? empytValues.dimension : dimension,
        name: name === UNKNOWN || name === null ? empytValues.name : name,
        type: type === UNKNOWN || type === null ? empytValues.type : type,
        residents
    };
}

function LocationSection({ data, title }) {
    const { dimension, name, type, residents } = getLocationData(data);

    return (
        <Section title={title}>
            <p className={'location-section-type'}>{ type }</p>
            <p className={'location-section-name'}>{ name }</p>
            <p className={'location-section-dimension'}>{ dimension }</p>
            { residents && (
                <p className={'location-section-residents'}>
                    <span>
                        <img src={People} />
                    </span>
                    { residents.length }
                    { residents.length > 1 ? ' residents' : ' resident' }
                </p>
            ) }
        </Section>
    );
};

LocationSection.displayName = 'Components/CharacterModal/LocationSection';

export default memo(LocationSection);