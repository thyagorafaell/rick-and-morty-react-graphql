import React from 'react';
import styled from 'styled-components';

export const INFO = 'INFO';

export const ERROR = 'ERROR';

const Container = styled.section`
    background-color: var(--black);
    border: 2px solid var(--gray);
    border-radius: 8px;
    text-align: center;
    max-width: 350px;
    padding: 24px;
`;

const Icon = styled.section`
    ::before {
        content: "${props => props.type === ERROR ? 'x' : 'i' }";
    }

    border: 2px solid var(--white);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: inline-block;
    font-size: 28px;
    padding-top: 6px;
    text-align: center;
    font-weight: 700;
`;

const Message = styled.section`
    padding-top: 24px;
`;

export default function EmptyState({ className, message, type = INFO }) {
    return (
        <Container className={className}>
            <Icon type={type} />
            <Message>{ message }</Message>
        </Container>
    );
}

EmptyState.displayName = 'Components/EmptyState/EmptyState';