import React, { memo } from 'react';
import styled from 'styled-components';

const Item = styled.span`
    color: var(--white);
    cursor: pointer;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
`;

const CurrentItem = styled(Item)`
    color: var(--yellow);
`;

const DisabledItem = styled(Item)`
    color: #3E3E3E;
    cursor: not-allowed;
`;

function getComponent(current, disabled) {
    if (current)
        return CurrentItem;
    
    if (disabled)
        return DisabledItem;

    return Item;
}

function PageItem({ disabled, item, text, current, onChange }) {
    const Cmp = getComponent(current, disabled);
    const itemText = text || item;
    const onClick = !disabled ? () => onChange(item) : null;

    return <Cmp onClick={onClick}>{itemText}</Cmp>;
}

PageItem.displayName = 'Components/Generic/Pagination/PageItem';

export default memo(PageItem);