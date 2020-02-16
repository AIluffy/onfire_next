declare module '*/news.graphql' {
  /// <reference types="react" />
  import * as ApolloReactCommon from '@apollo/react-common';
  import * as ApolloReactComponents from '@apollo/react-components';
  import * as ApolloReactHooks from '@apollo/react-hooks';
  export declare type Maybe<T> = T | null;
  export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
  /** All built-in and custom scalars, mapped to their actual values */
  export declare type Scalars = {
      ID: string;
      String: string;
      Boolean: boolean;
      Int: number;
      Float: number;
  };
  export declare type Article = {
      __typename?: 'Article';
      title: Scalars['String'];
      info: Scalars['String'];
      content: Scalars['String'];
  };
  export declare type Feed = {
      __typename?: 'Feed';
      links: Array<Link>;
      matches: Array<Match>;
      offset: Scalars['String'];
  };
  export declare type Link = {
      __typename?: 'Link';
      articleId: Scalars['String'];
      thumb: Scalars['String'];
      title: Scalars['String'];
      ctime: Scalars['String'];
      comment: Scalars['String'];
  };
  export declare type Match = {
      __typename?: 'Match';
      id: Scalars['String'];
      status: Scalars['String'];
      startTime: Scalars['String'];
      title: Scalars['String'];
      teams: Array<Team>;
  };
  export declare type Mutation = {
      __typename?: 'Mutation';
      post: Link;
  };
  export declare type MutationPostArgs = {
      url: Scalars['String'];
      description: Scalars['String'];
  };
  export declare type Query = {
      __typename?: 'Query';
      feed: Feed;
      article: Article;
      record: Record;
  };
  export declare type QueryFeedArgs = {
      offset?: Maybe<Scalars['String']>;
  };
  export declare type QueryArticleArgs = {
      articleId?: Maybe<Scalars['String']>;
  };
  export declare type QueryRecordArgs = {
      type?: Maybe<Scalars['String']>;
      tabKey?: Maybe<Scalars['String']>;
  };
  export declare type Record = {
      __typename?: 'Record';
      tabs?: Maybe<Array<Tab>>;
      summary?: Maybe<Scalars['String']>;
      tables?: Maybe<Array<Table>>;
  };
  export declare type Tab = {
      __typename?: 'Tab';
      title: Scalars['String'];
      key: Scalars['String'];
  };
  export declare type Table = {
      __typename?: 'Table';
      sectionHeaders: Array<Scalars['String']>;
      teams: Array<TeamData>;
  };
  export declare type Team = {
      __typename?: 'Team';
      name: Scalars['String'];
      id: Scalars['ID'];
      score?: Maybe<Scalars['String']>;
  };
  export declare type TeamData = {
      __typename?: 'TeamData';
      id: Scalars['String'];
      name: Scalars['String'];
      playoff_desc: Scalars['String'];
      data: Array<Scalars['String']>;
  };
  export declare type FeedQueryVariables = {
      offset?: Maybe<Scalars['String']>;
  };
  export declare type FeedQuery = ({
      __typename?: 'Query';
  } & {
      feed: ({
          __typename?: 'Feed';
      } & Pick<Feed, 'offset'> & {
          links: Array<({
              __typename?: 'Link';
          } & Pick<Link, 'title' | 'thumb' | 'comment' | 'ctime' | 'articleId'>)>;
          matches: Array<({
              __typename?: 'Match';
          } & Pick<Match, 'id' | 'status' | 'startTime' | 'title'> & {
              teams: Array<({
                  __typename?: 'Team';
              } & Pick<Team, 'name' | 'id' | 'score'>)>;
          })>;
      });
  });
  export declare type ArticleQueryVariables = {
      articleId?: Maybe<Scalars['String']>;
  };
  export declare type ArticleQuery = ({
      __typename?: 'Query';
  } & {
      article: ({
          __typename?: 'Article';
      } & Pick<Article, 'title' | 'info' | 'content'>);
  });
  export declare type RecordQueryVariables = {
      type?: Maybe<Scalars['String']>;
      tabKey?: Maybe<Scalars['String']>;
  };
  export declare type RecordQuery = ({
      __typename?: 'Query';
  } & {
      record: ({
          __typename?: 'Record';
      } & Pick<Record, 'summary'> & {
          tabs: Maybe<Array<({
              __typename?: 'Tab';
          } & Pick<Tab, 'title' | 'key'>)>>;
          tables: Maybe<Array<({
              __typename?: 'Table';
          } & Pick<Table, 'sectionHeaders'> & {
              teams: Array<({
                  __typename?: 'TeamData';
              } & Pick<TeamData, 'id' | 'name' | 'playoff_desc' | 'data'>)>;
          })>>;
      });
  });
  export declare const FeedDocument: any;
  export declare type FeedComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FeedQuery, FeedQueryVariables>, 'query'>;
  export declare const FeedComponent: (props: Pick<ApolloReactComponents.QueryComponentOptions<FeedQuery, FeedQueryVariables>, "client" | "children" | "displayName" | "context" | "variables" | "errorPolicy" | "fetchPolicy" | "skip" | "onCompleted" | "onError" | "ssr" | "pollInterval" | "notifyOnNetworkStatusChange" | "partialRefetch" | "returnPartialData">) => JSX.Element;
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
  export declare function useFeedQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FeedQuery, FeedQueryVariables>): ApolloReactCommon.QueryResult<FeedQuery, FeedQueryVariables>;
  export declare function useFeedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<FeedQueryVariables>) => void, ApolloReactCommon.QueryResult<FeedQuery, FeedQueryVariables>];
  export declare type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
  export declare type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
  export declare type FeedQueryResult = ApolloReactCommon.QueryResult<FeedQuery, FeedQueryVariables>;
  export declare const ArticleDocument: any;
  export declare type ArticleComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ArticleQuery, ArticleQueryVariables>, 'query'>;
  export declare const ArticleComponent: (props: Pick<ApolloReactComponents.QueryComponentOptions<ArticleQuery, ArticleQueryVariables>, "client" | "children" | "displayName" | "context" | "variables" | "errorPolicy" | "fetchPolicy" | "skip" | "onCompleted" | "onError" | "ssr" | "pollInterval" | "notifyOnNetworkStatusChange" | "partialRefetch" | "returnPartialData">) => JSX.Element;
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
  export declare function useArticleQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ArticleQuery, ArticleQueryVariables>): ApolloReactCommon.QueryResult<ArticleQuery, ArticleQueryVariables>;
  export declare function useArticleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<ArticleQueryVariables>) => void, ApolloReactCommon.QueryResult<ArticleQuery, ArticleQueryVariables>];
  export declare type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
  export declare type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
  export declare type ArticleQueryResult = ApolloReactCommon.QueryResult<ArticleQuery, ArticleQueryVariables>;
  export declare const RecordDocument: any;
  export declare type RecordComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RecordQuery, RecordQueryVariables>, 'query'>;
  export declare const RecordComponent: (props: Pick<ApolloReactComponents.QueryComponentOptions<RecordQuery, RecordQueryVariables>, "client" | "children" | "displayName" | "context" | "variables" | "errorPolicy" | "fetchPolicy" | "skip" | "onCompleted" | "onError" | "ssr" | "pollInterval" | "notifyOnNetworkStatusChange" | "partialRefetch" | "returnPartialData">) => JSX.Element;
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
  export declare function useRecordQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecordQuery, RecordQueryVariables>): ApolloReactCommon.QueryResult<RecordQuery, RecordQueryVariables>;
  export declare function useRecordLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecordQuery, RecordQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<RecordQueryVariables>) => void, ApolloReactCommon.QueryResult<RecordQuery, RecordQueryVariables>];
  export declare type RecordQueryHookResult = ReturnType<typeof useRecordQuery>;
  export declare type RecordLazyQueryHookResult = ReturnType<typeof useRecordLazyQuery>;
  export declare type RecordQueryResult = ApolloReactCommon.QueryResult<RecordQuery, RecordQueryVariables>;
  }