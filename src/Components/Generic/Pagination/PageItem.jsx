import React, { memo } from 'react';

function PageItem({ disabled, item, text, current, onChange }) {
    const className = 'pagination-item' + (current ? ' pagination-item__current' : '') + (disabled ? ' pagination-item__disabled' : '');
    const itemText = text || item;
    const onClick = !disabled ? () => onChange(item) : null;

    return <span className={className} onClick={onClick}>{itemText}</span>;
}

PageItem.displayName = 'Components/Generic/Pagination/PageItem';

export default memo(PageItem);