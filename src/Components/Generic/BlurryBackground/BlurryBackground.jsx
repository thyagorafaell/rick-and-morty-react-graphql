import { createPortal } from 'react-dom';
import React from 'react';
import './BlurryBackground.css';

export default function BlurryBackground({ children }) {
    const loading = (
        <div className={'h-screen w-screen fixed inset-0 z-50 flex items-center justify-center'}>
            <div className={'h-screen w-screen blurry-background'}></div>
            <div className={'absolute'}>
                { children }
            </div>
        </div>
    );

    return createPortal(loading, document.body);
};

BlurryBackground.displayName = 'Components/Generic/BlurryBackground/BlurryBackground';