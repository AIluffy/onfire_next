import React from 'react';
import Layout from '../components/Layout';
import RecordTable from '../components/RecordTable';
import { Tabs, Models } from 'rmc-tabs';
import withApollo from '../lib/with-apollo';
import { useRecordQuery } from '../lib/news.graphql';
import { RecordType } from '../utils';

interface Props {}

const Record: React.FC<Props> = () => {
	const { data, fetchMore } = useRecordQuery({
		variables: {
			type: RecordType.tab
		}
	});

	const changeTab = (tab: Models.TabData) => {
		fetchMore({
			variables: {
				type: RecordType.table,
				tabKey: tab.key
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;

				const tabs = prev.record.tabs;
				const summary = prev.record.summary;
				const tables = fetchMoreResult.record.tables;

				return Object.assign(
					{},
					{
						record: {
							__typename: prev.record.__typename,
							tabs,
							summary,
							tables
						}
					}
				);
			}
		});
	};

	if (!data) {
		return null;
	}

	const record = data.record;

	const { tabs, summary, tables } = record;

	if (!tabs) {
		return null;
	}

	return (
		<Layout title={'首页'}>
			<Tabs tabs={tabs} onChange={changeTab}>
				<>
					{tables?.map((t, i) => (
						<RecordTable key={i} table={t} />
					))}
				</>
			</Tabs>
		</Layout>
	);
};

export default withApollo(Record, {
	ssr: true
});
