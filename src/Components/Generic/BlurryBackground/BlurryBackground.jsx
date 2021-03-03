import { createPortal } from 'react-dom';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
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

const Blurry = styled.div`
    height: 100vh;
    width: 100vw;
    backdrop-filter: var(--blur);
`;

const Content = styled.div`
    position: absolute;
`;

export default function BlurryBackground({ children }) {
    const loading = (
        <Container>
            <Blurry />
            <Content>
                { children }
            </Content>
        </Container>
    );

    return createPortal(loading, document.body);
};

BlurryBackground.displayName = 'Components/Generic/BlurryBackground/BlurryBackground';