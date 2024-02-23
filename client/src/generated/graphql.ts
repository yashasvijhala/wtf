import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Person = {
  __typename?: 'Person';
  age: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getPersonById: Person;
};


export type QueryGetPersonByIdArgs = {
  id: Scalars['String']['input'];
};

export type GetPersonByIdQueryVariables = Exact<{
  getPersonByIdId: Scalars['String']['input'];
}>;


export type GetPersonByIdQuery = { __typename?: 'Query', getPersonById: { __typename?: 'Person', id: string, name: string, age: number } };


export const GetPersonByIdDocument = gql`
    query GetPersonById($getPersonByIdId: String!) {
  getPersonById(id: $getPersonByIdId) {
    id
    name
    age
  }
}
    `;

/**
 * __useGetPersonByIdQuery__
 *
 * To run a query within a React component, call `useGetPersonByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonByIdQuery({
 *   variables: {
 *      getPersonByIdId: // value for 'getPersonByIdId'
 *   },
 * });
 */
export function useGetPersonByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPersonByIdQuery, GetPersonByIdQueryVariables> & ({ variables: GetPersonByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonByIdQuery, GetPersonByIdQueryVariables>(GetPersonByIdDocument, options);
      }
export function useGetPersonByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonByIdQuery, GetPersonByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonByIdQuery, GetPersonByIdQueryVariables>(GetPersonByIdDocument, options);
        }
export function useGetPersonByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPersonByIdQuery, GetPersonByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPersonByIdQuery, GetPersonByIdQueryVariables>(GetPersonByIdDocument, options);
        }
export type GetPersonByIdQueryHookResult = ReturnType<typeof useGetPersonByIdQuery>;
export type GetPersonByIdLazyQueryHookResult = ReturnType<typeof useGetPersonByIdLazyQuery>;
export type GetPersonByIdSuspenseQueryHookResult = ReturnType<typeof useGetPersonByIdSuspenseQuery>;
export type GetPersonByIdQueryResult = Apollo.QueryResult<GetPersonByIdQuery, GetPersonByIdQueryVariables>;