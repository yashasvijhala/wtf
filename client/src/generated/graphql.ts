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

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID']['output'];
  person?: Maybe<Array<Person>>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPerson: Scalars['Boolean']['output'];
};


export type MutationCreatePersonArgs = {
  age: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type Person = {
  __typename?: 'Person';
  age: Scalars['Float']['output'];
  book?: Maybe<Book>;
  bookId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getPeople: Array<Person>;
  getPersonById: Person;
  people: Array<Scalars['String']['output']>;
};


export type QueryGetPersonByIdArgs = {
  hey: Scalars['String']['input'];
};

export type CreatePersonMutationVariables = Exact<{
  age: Scalars['Float']['input'];
  name: Scalars['String']['input'];
}>;


export type CreatePersonMutation = { __typename?: 'Mutation', createPerson: boolean };

export type GetPeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPeopleQuery = { __typename?: 'Query', getPeople: Array<{ __typename?: 'Person', id: string, name: string, age: number, bookId?: string | null }> };

export type GetPersonByIdQueryVariables = Exact<{
  hey: Scalars['String']['input'];
}>;


export type GetPersonByIdQuery = { __typename?: 'Query', getPersonById: { __typename?: 'Person', id: string, name: string, age: number, bookId?: string | null } };


export const CreatePersonDocument = gql`
    mutation CreatePerson($age: Float!, $name: String!) {
  createPerson(age: $age, name: $name)
}
    `;
export type CreatePersonMutationFn = Apollo.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      age: // value for 'age'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreatePersonMutation(baseOptions?: Apollo.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, options);
      }
export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<CreatePersonMutation, CreatePersonMutationVariables>;
export const GetPeopleDocument = gql`
    query GetPeople {
  getPeople {
    id
    name
    age
    bookId
  }
}
    `;

/**
 * __useGetPeopleQuery__
 *
 * To run a query within a React component, call `useGetPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPeopleQuery(baseOptions?: Apollo.QueryHookOptions<GetPeopleQuery, GetPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPeopleQuery, GetPeopleQueryVariables>(GetPeopleDocument, options);
      }
export function useGetPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPeopleQuery, GetPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPeopleQuery, GetPeopleQueryVariables>(GetPeopleDocument, options);
        }
export function useGetPeopleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPeopleQuery, GetPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPeopleQuery, GetPeopleQueryVariables>(GetPeopleDocument, options);
        }
export type GetPeopleQueryHookResult = ReturnType<typeof useGetPeopleQuery>;
export type GetPeopleLazyQueryHookResult = ReturnType<typeof useGetPeopleLazyQuery>;
export type GetPeopleSuspenseQueryHookResult = ReturnType<typeof useGetPeopleSuspenseQuery>;
export type GetPeopleQueryResult = Apollo.QueryResult<GetPeopleQuery, GetPeopleQueryVariables>;
export const GetPersonByIdDocument = gql`
    query GetPersonById($hey: String!) {
  getPersonById(hey: $hey) {
    id
    name
    age
    bookId
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
 *      hey: // value for 'hey'
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