import React, { Fragment, useState } from 'react';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import CharactersGrid from './Components/CharactersGrid/CharactersGrid';
import Header from './Components/Generic/Header/Header';
import Pagination from './Components/Generic/Pagination/Pagination';
import Loading from './Components/Generic/Loading/Loading';
import { CHARACTERS_NOT_FOUND_ERROR } from './constants/errors';
import { ERROR, NO_CHARACTERS_FOUND } from './constants/messages';
import { CHARACTERS } from './constants/queries';
import './App.css';

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
});

function ConnectedApp({ filter, page, setPage }) {
	const { data, error, loading } = useQuery(CHARACTERS, {
		variables: {
			page, filter
		}
	});

	if (loading)
		return <Loading />;

	if (error) {
		if (error.message === CHARACTERS_NOT_FOUND_ERROR)
			return NO_CHARACTERS_FOUND;
			
		return ERROR;
	}

	return data && (
		<Fragment>
			<CharactersGrid cards={data.characters.results} />
			<div className={'home-pagination'}>
				<Pagination {...data.characters.info} onChange={setPage} page={page} />
			</div>
		</Fragment>
	);
}

function AppData() {
	const [filter, setFilter] = useState(null);
	const [page, setPage] = useState(1);

	function onSearch(filter) {
		setFilter(filter);
		setPage(1);
	}

	return (
		<div className={'flex items-center justify-center flex-col text-white'}>
			<Header onSearch={onSearch} />
			{ filter !== null && <ConnectedApp filter={filter} page={page} setPage={setPage} /> }
		</div>
	);
}

export default function App() {
	return <ApolloProvider client={client} children={<AppData />} />;
}

AppData.displayName = 'AppData';
App.displayName = 'App';