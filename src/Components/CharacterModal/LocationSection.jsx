import React, { memo } from 'react';
import styled from 'styled-components';
import Section from '../Generic/Section/Section';
import People from '../../images/people.png';
import { UNKNOWN } from '../../constants/apiData';

const emptyValues = {
    dimension: 'Unknown dimension',
    name: 'Unknown',
    type: 'Unknown planet'
};

const Type = styled.p`
    color: var(--light-gray);
    font-size: 14px;
    line-height: 19px;
`;

const Name = styled.p`
    font-size: 28px;
    line-height: 38px;
`;

const Dimension = styled.p`
    font-size: 14px;
    line-height: 19px;
`;

const Residents = styled(Type)`
    margin-top: 12px;

    img {
        display: inline;
        margin-top: -2px;
        margin-right: 11px;
    }
`;

function getLocationData(data) {
    const { dimension, name, residents, type } = data || {};

    if (!data)
        return emptyValues;

    return {
        dimension: dimension === UNKNOWN || dimension === null ? emptyValues.dimension : dimension,
        name: name === UNKNOWN || name === null ? emptyValues.name : name,
        type: type === UNKNOWN || type === null ? emptyValues.type : type,
        residents
    };
}

function LocationSection({ data, title }) {
    const { dimension, name, type, residents } = getLocationData(data);

    return (
        <Section title={title}>
            <Type>{ type }</Type>
            <Name>{ name }</Name>
            <Dimension>{ dimension }</Dimension>
            { residents && (
                <Residents>
                    <span>
                        <img src={People} />
                    </span>
                    { residents.length }
                    { residents.length > 1 ? ' residents' : ' resident' }
                </Residents>
            ) }
        </Section>
    );
};

LocationSection.displayName = 'Components/CharacterModal/LocationSection';

export default memo(LocationSection);