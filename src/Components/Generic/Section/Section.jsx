import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
`;

const Title = styled.h4`
    color: var(--yellow);
    font-family: Nunito;
    font-size: 13px;
    letter-spacing: 0.65em;
    line-height: 18px;
    text-transform: uppercase;
`;

const Content = styled.div`
    margin-top: 9px;
`

function Section({ className, children, title }) {
    return (
        <Container className={className}>
            { title && <Title>{title}</Title> }
            <Content>
                { children }
            </Content>
        </Container>
    )
}

Section.displayName = 'Components/Generic/Section/Section';

export default memo(Section);