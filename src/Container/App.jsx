import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { getClient } from '../services/rickAndMortyGraphQLApi';
import './App.css';

import AppData from './AppData';

export default function App() {
	return <ApolloProvider client={getClient()} children={<AppData />} />;
}

App.displayName = 'App';