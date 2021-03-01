import { createPortal } from 'react-dom';
import React, { useRef } from 'react';
import Button from '../Form/Button/Button';
import './Modal.css';

export default function Modal({ children, onClose }) {
    const backdrop = useRef();
    const onBackdropClick = ({ target }) => target === backdrop.current && onClose();

    const modal = (
        <div className={'modal fixed inset-0 z-50 flex items-center justify-center'} onClick={onBackdropClick} ref={backdrop}>
            <div className={'modal-content overflow-hidden flex flex-col'}>
                { <Button className={'fixed z-10'} onClick={onClose}>{'Close'}</Button> }
                { children }
            </div>
        </div>
    );

    return createPortal(modal, document.body);
}

Modal.displayName = 'Components/Modal/Modal';