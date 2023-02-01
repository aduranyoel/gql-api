import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {join} from "path";
import {graphqlFormatError} from "./utils";

@Module({
  imports: [
    //  Overview https://docs.nestjs.com/graphql/quick-start
    //  https://codesandbox.io/examples/package/@nestjs/graphql

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: false,
      debug: true,
      playground: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql/graphql.schema.ts'),
        outputAs: 'class',
      },
      formatError: graphqlFormatError,
    }),
  ],

})
export class GraphqlModule {}
