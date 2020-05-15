const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    greetings: [String]
  }
`;

const resolvers = {
  Query: {
    greetings: () => ['Hello GraphQL world!👋','Eres un crack tqm mi hermanito 😋']
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${url}`));