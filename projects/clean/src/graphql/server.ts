import path from 'path';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadFilesSync } from '@graphql-tools/load-files';
import { loadSchemaSync } from '@graphql-tools/load';
import { mergeResolvers } from '@graphql-tools/merge';
import { ApolloServer } from 'apollo-server-express';

const resolvers = loadFilesSync(path.join(__dirname, 'resolvers'));
const typeDefs = loadSchemaSync('./**/*.graphql', {
  loaders: [new GraphQLFileLoader()]
});

const server = new ApolloServer({
  typeDefs,
  resolvers: mergeResolvers(resolvers),
});

export default server;
