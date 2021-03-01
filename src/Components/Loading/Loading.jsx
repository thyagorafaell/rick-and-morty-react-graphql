import { createPortal } from 'react-dom';
import React from 'react';
import Card from '../Card/Card';
import defaultCard from '../../images/default-card.png';

export default function Loading() {
    const loading = (
        <div className={'h-screen w-screen fixed inset-0 z-50 flex items-center justify-center'}>
            <div className={'h-screen w-screen'} style={{ backdropFilter: 'var(--blur)' }}></div>
            <div className={'absolute'}>
                <Card image={defaultCard} width={200} height={200} />
            </div>
        </div>
    );

    return createPortal(loading, document.body);
};

Loading.displayName = 'Components/Loading/Loading';