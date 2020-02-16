import React from 'react';
import { Match as IMatch } from '../lib/news.graphql';
import { GameType, GameStatus } from '../utils';

interface Props {
	matches: IMatch[];
}

const MatchItem: React.FC<{ match: IMatch }> = ({ match }) => (
	<section className="match-item">
		<div className="match-info">{GameType[match.status]}</div>
		<div className="match-games">
			{match.teams.map(team => (
				<div className="team" key={team.id}>
					<div className="team-info">
						<span className="team-name">{team.name}</span>
					</div>
					<span className="team-score">{team.score}</span>
				</div>
			))}
		</div>
		<style jsx>
			{`
				.match-item {
					width: 50%;

					.match-info {
						height: 60px;
					}

					.team {
						display: flex;
						justify-content: space-between;
						line-height: 30px;
					}
				}
			`}
		</style>
	</section>
);

const Match: React.FC<Props> = ({ matches }) => {
	return (
		<>
			<article className="match">
				{matches.map(match => (
					<MatchItem key={match.id} match={match} />
				))}
			</article>
			<style jsx>
				{`
					.match {
						width: 100%;
						display: flex;
					}
				`}
			</style>
		</>
	);
};

export default Match;
