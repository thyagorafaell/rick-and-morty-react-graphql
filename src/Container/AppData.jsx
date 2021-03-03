import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header/Header';
import AppPresentation from './AppPresentation';

const Container = styled.div`
	color: var(--white);
	display: flex;
    align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export default function AppData() {
	const [filter, setFilter] = useState(null);
	const [page, setPage] = useState(1);

	function onSearch(filter) {
		setFilter(filter);
		setPage(1);
	}

	return (
		<Container>
			<Header onSearch={onSearch} />
			{ filter !== null && <AppPresentation filter={filter} page={page} setPage={setPage} /> }
		</Container>
	);
}

AppData.displayName = 'Container/AppData';