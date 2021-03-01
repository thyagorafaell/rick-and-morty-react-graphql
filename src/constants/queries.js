import { gql } from 'apollo-boost';

export const CHARACTER = gql`
    query CHARACTER($id: ID!) {
        character(id: $id) {
            id
            name
            gender
            status
            species
            episode {
                air_date
            }
            origin {
                dimension
                name
                type
                residents {
                    id
                }
            }
            location {
                dimension
                name
                type
                residents {
                    id
                }
            }
        }
    }
`;

export const CHARACTERS = gql`
	query CHARACTERS($page: Int!, $filter: String) {
		characters(page: $page, filter: { name: $filter }) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				status
				species
				image
			}
		}
	}
`;