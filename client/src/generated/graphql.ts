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
  DateTime: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Scalars['Boolean']['output'];
};


export type MutationCreatePostArgs = {
  ImageUrl?: InputMaybe<Scalars['String']['input']>;
  UserName?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  subredditTopic: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String']['output'];
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  subreddit?: Maybe<Subreddit>;
  subredditId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  userName: Scalars['String']['output'];
  votes?: Maybe<Array<Vote>>;
};

export type Query = {
  __typename?: 'Query';
  getPosts: Array<Post>;
  getSubredditsByTopic: Array<Subreddit>;
};


export type QueryGetSubredditsByTopicArgs = {
  topic: Scalars['String']['input'];
};

export type Subreddit = {
  __typename?: 'Subreddit';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  posts?: Maybe<Array<Post>>;
  topic: Scalars['String']['output'];
};

export type Vote = {
  __typename?: 'Vote';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  upVote: Scalars['Boolean']['output'];
  userName: Scalars['String']['output'];
};

export type CreatePostMutationVariables = Exact<{
  subredditTopic: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userName?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: boolean };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', getPosts: Array<{ __typename?: 'Post', body: string, id: string, createdAt: any, image?: string | null, title: string, userName: string, comments?: Array<{ __typename?: 'Comment', comment: string, id: string, createdAt: any, userName: string }> | null, subreddit?: { __typename?: 'Subreddit', createdAt: any, id: string, topic: string } | null }> };


export const CreatePostDocument = gql`
    mutation CreatePost($subredditTopic: String!, $title: String!, $userName: String, $body: String, $imageUrl: String) {
  createPost(
    subredditTopic: $subredditTopic
    title: $title
    UserName: $userName
    body: $body
    ImageUrl: $imageUrl
  )
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      subredditTopic: // value for 'subredditTopic'
 *      title: // value for 'title'
 *      userName: // value for 'userName'
 *      body: // value for 'body'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const GetPostsDocument = gql`
    query GetPosts {
  getPosts {
    body
    comments {
      comment
      id
      createdAt
      userName
    }
    id
    createdAt
    image
    subreddit {
      createdAt
      id
      topic
    }
    title
    userName
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export function useGetPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsSuspenseQueryHookResult = ReturnType<typeof useGetPostsSuspenseQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;