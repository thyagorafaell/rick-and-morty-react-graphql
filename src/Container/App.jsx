import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { getClient } from '../services/rickAndMortyGraphQLApi';
import AppData from './AppData';
import './App.css';

export default function App() {
	return <ApolloProvider client={getClient()} children={<AppData />} />;
}

App.displayName = 'App';