import React, { useRef } from 'react';
import Button from '../Form/Button/Button';
import BlurryBackground from '../BlurryBackground/BlurryBackground'
import './Modal.css';

export default function Modal({ children, onClose }) {
    const backdrop = useRef();
    const onBackdropClick = ({ target }) => target === backdrop.current && onClose();

    return (
        <BlurryBackground>
            <div className={'modal fixed inset-0 z-50 flex items-center justify-center'} onClick={onBackdropClick} ref={backdrop}>
                <div className={'modal-content flex flex-col overflow-hidden'}>
                    { <Button className={'absolute z-50 hidden md:block full-close-button'} onClick={onClose}>{'Close'}</Button> }
                    { <Button className={'absolute z-50 md:hidden sm-close-button'} onClick={onClose}>{'x'}</Button> }
                    { children }
                </div>
            </div>
        </BlurryBackground>
    );
}

Modal.displayName = 'Components/Generic/Modal/Modal';