import { IResolvers } from 'apollo-server-micro';
import fetch from 'isomorphic-unfetch';
import qs from 'querystring';
import parse5 from 'parse5';
import { Match as IMatch } from './news.graphql';
import {
	ONFIRE_HOST,
	ONFIRE_2nd_HOST,
	ONFIRE_QUERY,
	NEWS_API,
	TAB_API,
	FEED_TYPE,
	TABLE_API
} from '../utils/consts';
import { RecordType } from '../utils';

type Link = {
	articleid: string;
	thumb: string;
	title: string;
	ctime: string;
	comment_total: string;
};

type Team = {
	name: string;
	id: string;
};
type Match = {
	id: string;
	status: string;
	title: string;
	startTime: string;
	homeScore: string;
	awayScore: string;
	homeTeam: Team;
	awayTeam: Team;
};

type Tab = {
	name: string;
	dataUrl: string;
};

const generateLink = (link: Link) => ({
	articleId: link.articleid,
	thumb: link.thumb,
	title: link.title,
	ctime: link.ctime,
	comment: link.comment_total
});

const generateMatch = (match: Match): IMatch => {
	const homeScore = match.homeScore;
	const awayScore = match.awayScore;

	const homeTeam = match.homeTeam;
	const awayTeam = match.awayTeam;

	return {
		id: match.id,
		status: match.status,
		startTime: match.startTime,
		title: match.title,
		teams: [
			{
				...homeTeam,
				score: homeScore
			},
			{
				...awayTeam,
				score: awayScore
			}
		]
	};
};

const resolvers: IResolvers = {
	Query: {
		feed: async (_parent, _args, _context, _info) => {
			const offset = _args.offset || '';
			const query = {
				...ONFIRE_QUERY,
				offset
			};

			const url = `http://${ONFIRE_HOST}${NEWS_API}?${qs.stringify(
				query
			)}`;

			try {
				const res = await fetch(url);
				const { data, next_offset } = await res.json();

				const links = data
					.filter(
						(feed: { type: string }) =>
							feed.type === FEED_TYPE['LINK']
					)
					.map(generateLink);

				let matches: IMatch[] = [];

				const matchOfFeed = data.find(
					(feed: { type: string }) => feed.type === FEED_TYPE['MATCH']
				) as
					| {
							matches: Match[];
					  }
					| undefined;

				if (matchOfFeed && matchOfFeed.matches) {
					matches = matchOfFeed.matches.map(generateMatch);
				}

				return {
					links,
					matches: matches || [],
					offset: next_offset
				};
			} catch (error) {
				return {
					links: [],
					matches: [],
					offset: ''
				};
			}
		},
		article: async (_parent, _args, _context, _info) => {
			const articleId = _args.articleId;

			const url = `http://${ONFIRE_HOST}/detail/${articleId}?p=article`;

			const res = await fetch(url);
			const articleDoc = await res.text();
			const document = parse5.parse(articleDoc) as any;
			const exactNodes =
				document.childNodes[1].childNodes[2].childNodes[3]
					.childNodes[1];

			return {
				title: parse5.serialize(exactNodes.childNodes[1]),
				info: parse5.serialize(exactNodes.childNodes[3]),
				content: parse5.serialize(exactNodes.childNodes[7])
			};
		},
		record: async (_parent, _args, _context, _info) => {
			const type = _args.type as RecordType;
			const tabUrl = `http://${ONFIRE_2nd_HOST}${TAB_API}`;

			if (type === RecordType.tab) {
				try {
					const res = await fetch(tabUrl);

					const json = await res.json();
					const tabs = (json.Columns as Tab[]) || [];

					const firstKey = tabs[0].dataUrl;

					const tableUrl = `http://${ONFIRE_2nd_HOST}${TABLE_API}${firstKey}.json`;

					const res2 = await fetch(tableUrl);

					const json2 = await res2.json();
					const summary = json2.summary;
					const tables = json2.data.map((d: any) => {
						return {
							sectionHeaders: d.sectionHeaders,
							teams: d.cells.map((cell: any) => ({
								...cell.team,
								data: cell.data
							}))
						};
					});

					return {
						tabs: tabs.map(tab => ({
							title: tab.name,
							key: tab.dataUrl
						})),
						summary,
						tables
					};
				} catch (error) {
					return {
						tabs: [],
						summary: '',
						tables: []
					};
				}
			} else {
				const tabKey = _args.tabKey;
				const tableUrl = `http://${ONFIRE_2nd_HOST}${TABLE_API}${tabKey}.json`;

				try {
					const res = await fetch(tableUrl);

					const json = await res.json();
					const summary = json.summary;
					const tables = json.data.map((d: any) => {
						return {
							sectionHeaders: d.sectionHeaders,
							teams: d.cells.map((cell: any) => ({
								...cell.team,
								data: cell.data
							}))
						};
					});

					return {
						summary,
						tables
					};
				} catch (error) {
					return {
						summary: '',
						tables: []
					};
				}
			}
		}
	}
};

export default resolvers;
