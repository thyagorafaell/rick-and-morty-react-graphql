import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import AppPresentation from './AppPresentation';

export default function AppData() {
	const [filter, setFilter] = useState(null);
	const [page, setPage] = useState(1);

	function onSearch(filter) {
		setFilter(filter);
		setPage(1);
	}

	return (
		<div className={'flex items-center justify-center flex-col text-white'}>
			<Header onSearch={onSearch} />
			{ filter !== null && <AppPresentation filter={filter} page={page} setPage={setPage} /> }
		</div>
	);
}

AppData.displayName = 'AppData';