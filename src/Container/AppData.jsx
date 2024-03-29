import React, { useState } from 'react';
import styled from 'styled-components';
import EmptyState from '../Components/EmptyState/EmptyState';
import Header from '../Components/Header/Header';
import AppPresentation from './AppPresentation';

const Container = styled.div`
	color: var(--white);
	display: flex;
    align-items: center;
	flex-direction: column;
	justify-content: center;
    min-height: 99vh;
`;

const Main = styled.main`
	flex: 1
`;

const Footer = styled.footer`
	font-style: italic;
	font-size: 10px;
	text-align: center;

	@media (min-width: 414px) {
		font-size: 12px;
	}
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
			<Main>
				{ filter !== null && <AppPresentation filter={filter} page={page} setPage={setPage} /> }
				{ filter === null && <EmptyState message={'Start filtering some Rick and Morty characters'} /> }
			</Main>
			<Footer>
				{'Made with React, GraphQL and Styled Components by Thyago Rafael.'}
			</Footer>
		</Container>
	);
}

AppData.displayName = 'Container/AppData';