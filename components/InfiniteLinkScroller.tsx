import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFeedQuery, Link as ILink } from '../lib/news.graphql';
import { uniqBy } from 'lodash';
import Link from './Link';
import Skeleton from './Skeleton';
import Icon from './Icon';
import Loader from './Loader';
import Match from './Match';

interface Props {}

const InfiniteLinkScroller: React.FC<Props> = () => {
	const { data, error, loading, fetchMore } = useFeedQuery({
		variables: {
			offset: '' // value for 'offset'
		}
	});

	let hasMore = true;

	if (loading) return <Skeleton />;
	if (error)
		return <Icon className="network-error" symbol={'iconnetwork-error'} />;
	if (!data)
		return <Icon className="network-error" symbol={'iconbasketball2'} />;

	const {
		feed: { links, offset, matches }
	} = data;

	const refresh = () => {
		hasMore = false;

		fetchMore({
			variables: {
				offset: ''
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;

				hasMore = true;

				const preLinks = prev.feed.links;
				const newLinks = fetchMoreResult.feed.links;
				const preMatches = prev.feed.matches;
				const newMatches = fetchMoreResult.feed.matches;

				const links = [...newLinks, ...preLinks];
				const matches = [...newMatches, ...preMatches];

				return Object.assign(
					{},
					{
						feed: {
							__typename: prev.feed.__typename,
							links: uniqBy(links, 'articleId'),
							offset: fetchMoreResult.feed.offset,
							matches: uniqBy(matches, 'id')
						}
					}
				);
			}
		});
	};

	const loadMore = () => {
		hasMore = false;
		fetchMore({
			variables: {
				offset
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;

				hasMore = true;

				const preLinks = prev.feed.links;
				const newLinks = fetchMoreResult.feed.links;
				const preMatches = prev.feed.matches;
				const newMatches = fetchMoreResult.feed.matches;

				const links = [...preLinks, ...newLinks];
				const matches = [...newMatches, ...preMatches];

				return Object.assign(
					{},
					{
						feed: {
							__typename: prev.feed.__typename,
							links: links,
							offset: fetchMoreResult.feed.offset,
							matches
						}
					}
				);
			}
		});
	};

	return (
		<>
			<InfiniteScroll
				dataLength={links.length}
				next={loadMore}
				hasMore={hasMore}
				scrollableTarget="scrollableDiv"
				loader={<Loader />}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>已经触底</b>
					</p>
				}
				refreshFunction={refresh}
				pullDownToRefreshThreshold={100}
				pullDownToRefresh
				pullDownToRefreshContent={
					<h3 style={{ textAlign: 'center' }}>&#8595; 下拉刷新</h3>
				}
				releaseToRefreshContent={
					<h3 style={{ textAlign: 'center', color: '#e83a52' }}>
						&#8593; 释放刷新
					</h3>
				}
			>
				<Match matches={matches} />
				{links.map(link => (
					<Link key={link.title} link={link} />
				))}
			</InfiniteScroll>
		</>
	);
};

export default InfiniteLinkScroller;
