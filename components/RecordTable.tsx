import React from 'react';
import { Table } from '../lib/news.graphql';

interface Props {
	table: Table;
}

const RecordTable: React.FC<Props> = ({ table }) => {
	return (
		<>
			<dl>
				<dt className="table-list">
					<div>{table.sectionHeaders[0]}</div>
					<div>
						{table.sectionHeaders.slice(1).map(h => (
							<p>{h}</p>
						))}
					</div>
				</dt>
				{table.teams.map(team => (
					<dd className="table-list" key={team.id}>
						<div>{team.name}</div>
						<div>
							{team.data.map(d => (
								<p>{d}</p>
							))}
						</div>
					</dd>
				))}
			</dl>

			<style jsx>
				{`
					.table-list {
						display: flex;
						justify-content: space-between;
						align-items: center;

						div {
							display: flex;

							p {
								min-width: 80px;
							}
						}
					}

					dl {
						margin: 0 8px;
						padding: 0;
						color: rgba(0, 0, 0, 0.65);
					}

					dt {
						background: #e6f7ff;
						color: #000;
						margin: 0;
						height: 60px;
						font-size: 14px;
						line-heigth: 1.2;
						position: -webkit-sticky;
						position: sticky;
						top: 0px;
					}

					dd {
						margin: 0;
						height: 90px;
						font-size: 15px;

						&:nth-child(2n + 1) {
							background: rgba(230, 247, 255, 0.8);
						}
					}

					dd + dd {
						border-style: none;
					}
				`}
			</style>
		</>
	);
};

export default RecordTable;
