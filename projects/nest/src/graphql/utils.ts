import {ApolloServerErrorCode} from "@apollo/server/errors";

export const graphqlFormatError = (formattedError) => {
    // https://www.apollographql.com/docs/apollo-server/data/errors/#throwing-errors
    switch (formattedError.extensions?.code) {
        case ApolloServerErrorCode.INTERNAL_SERVER_ERROR:
            return {
                ...formattedError,
                message: "Your query doesn't match the schema. Try double-checking it!",
            };
        case ApolloServerErrorCode.GRAPHQL_PARSE_FAILED:
            return {
                ...formattedError,
            };
        case ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED:
            return {
                ...formattedError,
            };
        case ApolloServerErrorCode.BAD_REQUEST:
            return {
                ...formattedError,
            };
        case ApolloServerErrorCode.BAD_USER_INPUT:
            return {
                ...formattedError,
            };
        case ApolloServerErrorCode.OPERATION_RESOLUTION_FAILURE:
            return {
                ...formattedError,
            };
        case ApolloServerErrorCode.PERSISTED_QUERY_NOT_FOUND:
            return {
                ...formattedError,
            };
        case ApolloServerErrorCode.PERSISTED_QUERY_NOT_SUPPORTED:
            return {
                ...formattedError,
            };
        default:
            return formattedError;
    }
}