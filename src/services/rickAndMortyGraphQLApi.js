import ApolloClient from 'apollo-boost';

export function getClient() {
    return new ApolloClient({
        uri: 'https://rickandmortyapi.com/graphql',
    });
}

export default { getClient };