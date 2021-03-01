import React, { memo } from 'react';
import './Pagination.css';

function getPages(pages, currentPage) {
    const minPage = 1;
    const length = Math.min(pages, 5);

    let start = currentPage - Math.floor(length / 2);
    start = Math.max(start, minPage);
    start = Math.min(start, minPage + pages - length);
   
    return Array.from({ length }, (_value, i) => start + i);
}

function PageItem({ disabled, item, text, current, onChange }) {
    const className = 'pagination-item' + (current ? ' pagination-item__current' : '') + (disabled ? ' pagination-item__disabled' : '');
    const itemText = text || item;
    const onClick = !disabled ? () => onChange(item) : null;

    return <span className={className} onClick={onClick}>{itemText}</span>;
}

function Pagination({ next, onChange, page, pages, prev }) {
    const items = getPages(pages, page).map(item => {
        return <PageItem key={item} current={item === page} item={item} onChange={onChange} />;
    });

    return (
        <div className={`pagination grid grid-cols-${items.length + 2}`}>
            <PageItem disabled={prev === null} item={prev} onChange={onChange} text={'<'} />
            { items }
            <PageItem disabled={next === null} item={next} onChange={onChange} text={'>'} />
        </div>
    );
}

Pagination.displayName = 'Components/Pagination/Pagination';

export default memo(Pagination);