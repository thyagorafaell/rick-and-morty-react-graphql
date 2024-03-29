import { useQuery } from '@apollo/react-hooks';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import CharactersGrid from '../Components/CharactersGrid/CharactersGrid';
import Pagination from '../Components/Generic/Pagination/Pagination';
import Loading from '../Components/Generic/Loading/Loading';
import { CHARACTERS_NOT_FOUND_ERROR } from '../constants/errors';
import { ERROR, NO_CHARACTERS_FOUND } from '../constants/messages';
import { CHARACTERS } from '../constants/queries';
import EmptyState, { ERROR as ERROR_STATE } from '../Components/EmptyState/EmptyState';

const HomePagination = styled(Pagination)`
	padding: 15px 0;

	@media (min-width: 414px) {
		padding: 30px 0;
	}
`;

export default function AppPresentation({ filter, page, setPage }) {
	const { data, error, loading } = useQuery(CHARACTERS, {
		variables: {
			page, filter
		}
	});

	if (loading)
		return <Loading />;

	if (error) {
		return (
			<EmptyState
				type={ERROR_STATE}
				message={error.message === CHARACTERS_NOT_FOUND_ERROR ? NO_CHARACTERS_FOUND : ERROR}
			/>
		);
	}

	return data && (
		<Fragment>
			<CharactersGrid cards={data.characters.results} />
			<HomePagination {...data.characters.info} onChange={setPage} page={page} />
		</Fragment>
	);
}

AppPresentation.displayName = 'ConnectedApp';