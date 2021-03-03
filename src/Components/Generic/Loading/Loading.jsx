import React from 'react';
import Card from '../Card/Card';
import BlurryBackground from '../BlurryBackground/BlurryBackground'
import defaultCard from '../../../images/default-card.png';

export default function Loading() {
    return (
        <BlurryBackground>
            <Card image={defaultCard} width={200} height={200} />
        </BlurryBackground>
    );
};

Loading.displayName = 'Components/Generic/Loading/Loading';