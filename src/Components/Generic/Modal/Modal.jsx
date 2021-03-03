import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../Form/Button';
import BlurryBackground from '../BlurryBackground/BlurryBackground';

const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    position: fixed;
    z-index: 50;
`;

const Content = styled.div`
    width: 90vw;
    height: 90vh;
    max-width: 1034px;
    max-height: 650px;
    background: var(--black);
    border-radius: 16px;
    border: 1px solid var(--gray);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const FullCloseButton = styled(Button)`
    display: none;
    margin-top: 15px;
    margin-left: 15px;
    position: absolute;
    z-index: 50;

    @media (min-width: 768px) {
        display: block;
    }
`;

const SmallCloseButton = styled(Button)`
    top: 5px;
    right: 5px;
    background-color: var(--black);
    display: block;
    position: absolute;
    z-index: 50;

    @media (min-width: 768px) {
        display: none;
    }
`;

export default function Modal({ children, onClose }) {
    const backdrop = useRef();
    const onBackdropClick = ({ target }) => target === backdrop.current && onClose();

    return (
        <BlurryBackground>
            <Backdrop onClick={onBackdropClick} ref={backdrop}>
                <Content>
                    { <FullCloseButton onClick={onClose}>{'Close'}</FullCloseButton> }
                    { <SmallCloseButton onClick={onClose}>{'x'}</SmallCloseButton> }
                    { children }
                </Content>
            </Backdrop>
        </BlurryBackground>
    );
}

Modal.displayName = 'Components/Generic/Modal/Modal';