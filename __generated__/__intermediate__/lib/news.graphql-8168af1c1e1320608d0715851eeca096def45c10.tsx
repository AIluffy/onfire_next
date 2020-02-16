import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Article = {
   __typename?: 'Article',
  title: Scalars['String'],
  info: Scalars['String'],
  content: Scalars['String'],
};

export type Feed = {
   __typename?: 'Feed',
  links: Array<Link>,
  matches: Array<Match>,
  offset: Scalars['String'],
};

export type Link = {
   __typename?: 'Link',
  articleId: Scalars['String'],
  thumb: Scalars['String'],
  title: Scalars['String'],
  ctime: Scalars['String'],
  comment: Scalars['String'],
};

export type Match = {
   __typename?: 'Match',
  id: Scalars['String'],
  status: Scalars['String'],
  startTime: Scalars['String'],
  title: Scalars['String'],
  teams: Array<Team>,
};

export type Mutation = {
   __typename?: 'Mutation',
  post: Link,
};


export type MutationPostArgs = {
  url: Scalars['String'],
  description: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  feed: Feed,
  article: Article,
  record: Record,
};


export type QueryFeedArgs = {
  offset?: Maybe<Scalars['String']>
};


export type QueryArticleArgs = {
  articleId?: Maybe<Scalars['String']>
};


export type QueryRecordArgs = {
  type?: Maybe<Scalars['String']>,
  tabKey?: Maybe<Scalars['String']>
};

export type Record = {
   __typename?: 'Record',
  tabs?: Maybe<Array<Tab>>,
  summary?: Maybe<Scalars['String']>,
  tables?: Maybe<Array<Table>>,
};

export type Tab = {
   __typename?: 'Tab',
  title: Scalars['String'],
  key: Scalars['String'],
};

export type Table = {
   __typename?: 'Table',
  sectionHeaders: Array<Scalars['String']>,
  teams: Array<TeamData>,
};

export type Team = {
   __typename?: 'Team',
  name: Scalars['String'],
  id: Scalars['ID'],
  score?: Maybe<Scalars['String']>,
};

export type TeamData = {
   __typename?: 'TeamData',
  id: Scalars['String'],
  name: Scalars['String'],
  playoff_desc: Scalars['String'],
  data: Array<Scalars['String']>,
};

export type FeedQueryVariables = {
  offset?: Maybe<Scalars['String']>
};


export type FeedQuery = (
  { __typename?: 'Query' }
  & { feed: (
    { __typename?: 'Feed' }
    & Pick<Feed, 'offset'>
    & { links: Array<(
      { __typename?: 'Link' }
      & Pick<Link, 'title' | 'thumb' | 'comment' | 'ctime' | 'articleId'>
    )>, matches: Array<(
      { __typename?: 'Match' }
      & Pick<Match, 'id' | 'status' | 'startTime' | 'title'>
      & { teams: Array<(
        { __typename?: 'Team' }
        & Pick<Team, 'name' | 'id' | 'score'>
      )> }
    )> }
  ) }
);

export type ArticleQueryVariables = {
  articleId?: Maybe<Scalars['String']>
};


export type ArticleQuery = (
  { __typename?: 'Query' }
  & { article: (
    { __typename?: 'Article' }
    & Pick<Article, 'title' | 'info' | 'content'>
  ) }
);

export type RecordQueryVariables = {
  type?: Maybe<Scalars['String']>,
  tabKey?: Maybe<Scalars['String']>
};


export type RecordQuery = (
  { __typename?: 'Query' }
  & { record: (
    { __typename?: 'Record' }
    & Pick<Record, 'summary'>
    & { tabs: Maybe<Array<(
      { __typename?: 'Tab' }
      & Pick<Tab, 'title' | 'key'>
    )>>, tables: Maybe<Array<(
      { __typename?: 'Table' }
      & Pick<Table, 'sectionHeaders'>
      & { teams: Array<(
        { __typename?: 'TeamData' }
        & Pick<TeamData, 'id' | 'name' | 'playoff_desc' | 'data'>
      )> }
    )>> }
  ) }
);


export const FeedDocument = gql`
    query Feed($offset: String) {
  feed(offset: $offset) {
    links {
      title
      thumb
      comment
      ctime
      articleId
    }
    matches {
      id
      status
      startTime
      title
      teams {
        name
        id
        score
      }
    }
    offset
  }
}
    `;
export type FeedComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FeedQuery, FeedQueryVariables>, 'query'>;

    export const FeedComponent = (props: FeedComponentProps) => (
      <ApolloReactComponents.Query<FeedQuery, FeedQueryVariables> query={FeedDocument} {...props} />
    );
    

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFeedQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FeedQuery, FeedQueryVariables>) {
        return ApolloReactHooks.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, baseOptions);
      }
export function useFeedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FeedQuery, FeedQueryVariables>(FeedDocument, baseOptions);
        }
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = ApolloReactCommon.QueryResult<FeedQuery, FeedQueryVariables>;
export const ArticleDocument = gql`
    query Article($articleId: String) {
  article(articleId: $articleId) {
    title
    info
    content
  }
}
    `;
export type ArticleComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ArticleQuery, ArticleQueryVariables>, 'query'>;

    export const ArticleComponent = (props: ArticleComponentProps) => (
      <ApolloReactComponents.Query<ArticleQuery, ArticleQueryVariables> query={ArticleDocument} {...props} />
    );
    

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      articleId: // value for 'articleId'
 *   },
 * });
 */
export function useArticleQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        return ApolloReactHooks.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, baseOptions);
      }
export function useArticleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, baseOptions);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = ApolloReactCommon.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const RecordDocument = gql`
    query Record($type: String, $tabKey: String) {
  record(type: $type, tabKey: $tabKey) {
    tabs {
      title
      key
    }
    summary
    tables {
      sectionHeaders
      teams {
        id
        name
        playoff_desc
        data
      }
    }
  }
}
    `;
export type RecordComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RecordQuery, RecordQueryVariables>, 'query'>;

    export const RecordComponent = (props: RecordComponentProps) => (
      <ApolloReactComponents.Query<RecordQuery, RecordQueryVariables> query={RecordDocument} {...props} />
    );
    

/**
 * __useRecordQuery__
 *
 * To run a query within a React component, call `useRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecordQuery({
 *   variables: {
 *      type: // value for 'type'
 *      tabKey: // value for 'tabKey'
 *   },
 * });
 */
export function useRecordQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecordQuery, RecordQueryVariables>) {
        return ApolloReactHooks.useQuery<RecordQuery, RecordQueryVariables>(RecordDocument, baseOptions);
      }
export function useRecordLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecordQuery, RecordQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RecordQuery, RecordQueryVariables>(RecordDocument, baseOptions);
        }
export type RecordQueryHookResult = ReturnType<typeof useRecordQuery>;
export type RecordLazyQueryHookResult = ReturnType<typeof useRecordLazyQuery>;
export type RecordQueryResult = ApolloReactCommon.QueryResult<RecordQuery, RecordQueryVariables>;