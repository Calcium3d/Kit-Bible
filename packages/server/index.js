import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import resolvers from './resolvers/resolver.js'

const typeDefs = `
	type Kit {
  	id: ID!
    	kit_company: String!,
      kit: String!,
			car_company: String!,
			car: String!,
			image_link: String!,
			approved: Boolean!,
  }

	type Query {
		Approved_Kits: (approved: Boolean): [Kit]

		To_Approve_Kits: (approved: Boolean): [Kit]
	}

	type Mutation {
		add(kit_company: String!, kit: String!, car_company: String!, car: String!, image_link: String!): Kit
	}
`

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log('Server is Running')
