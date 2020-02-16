import { GameStatus } from './enums';
export const ONFIRE_HOST = 'www.bbonfire.com';
export const ONFIRE_2nd_HOST = 'oss.bbonfire.com';
export const NEWS_API = '/api/news/roll';
export const TAB_API = '/stats/v1/config/TBC.json';
export const TABLE_API = '/stats/v1/data/';
export const PNG_API = '/stats/teaminamges/';

export const ONFIRE_QUERY = {
	is_top: 1,
	offset: '',
	focus: 6,
	len: 15,
	maxFocusType: 15,
	maxNewsType: 21,
	maxTopType: 20,
	singleMatch: 1,
	columnid:
		'1,2,3,12,13,14,16,17,18,19,22,33,34,35,36,37,39,41,44,46,47,48,49,53,54,55,56'
};

export const FEED_TYPE = {
	LINK: '1',
	MATCH: '13'
};

export const NAV_LIST = [
	{
		name: '首页',
		href: '/',
		icon: 'iconlanqiu6-copy',
		activeIcon: 'iconlanqiu6'
	},
	{
		name: '数据',
		href: '/record/',
		icon: 'iconbasketball1-copy',
		activeIcon: 'iconbasketball1'
	}
];

export const GameType: {
	[index: string]: string;
} = {
	[GameStatus.after]: '已结束'
};
