import React, { memo } from 'react';
import styled from 'styled-components';
import PageItem from './PageItem';

const Container = styled.div`
    display: grid;
    gap: 48px;
    grid-gap: 48px;
    grid-template-columns: repeat(${props => props.items}, minmax(0,1fr));
`;

function getPages(pages, currentPage) {
    const minPage = 1;
    const length = Math.min(pages, 5);

    let start = currentPage - Math.floor(length / 2);
    start = Math.max(start, minPage);
    start = Math.min(start, minPage + pages - length);
   
    return Array.from({ length }, (_value, i) => start + i);
}

function Pagination({ className, next, onChange, page, pages, prev }) {
    const items = getPages(pages, page).map(item => {
        return <PageItem key={item} current={item === page} item={item} onChange={onChange} />;
    });

    return (
        <Container items={items.length + 2} className={className}>
            <PageItem disabled={prev === null} item={prev} onChange={onChange} text={'<'} />
            { items }
            <PageItem disabled={next === null} item={next} onChange={onChange} text={'>'} />
        </Container>
    );
}

Pagination.displayName = 'Components/Generic/Pagination/Pagination';

export default memo(Pagination);