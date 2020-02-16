import React from 'react';
import { Link as ILink } from '../lib/news.graphql';
import NLink from 'next/link';
import { timeDifferenceForDate } from '../utils/index';

interface Props {
	link: ILink;
}

const Link: React.FC<Props> = props => {
	const { thumb, title, comment, ctime, articleId } = props.link;

	return (
		<>
			<NLink href="article/[id]" as={`/article/${articleId}`}>
				<div className="news">
					<div className="pic-container">
						<img className="pic" src={thumb} alt="" />
					</div>
					<div className="info-container">
						<p className="title">{title}</p>
						<div className="subInfo">
							<span className="comment">评论({comment})</span>
							<span className="time">
								{timeDifferenceForDate(ctime)}
							</span>
						</div>
					</div>
				</div>
			</NLink>
			<style jsx>
				{`
					.news {
						width: 100%;
						height: 180px;
						display: flex;
						align-items: center;
						padding: 0 4px;
						box-sizing: border-box;
						border-bottom: 1px solid #f0f0f0;

						.pic-container {
							width: 220px;
							height: 136px;
							display: flex;
							justify-content: center;
							align-items: center;
							overflow: hidden;

							.pic {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}

						.info-container {
							flex: 1;
							height: 100%;
							margin-left: 20px;
							padding: 10px 0 8px;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							box-sizing: border-box;

							.title {
								font-size: 15px;
								line-height: 20px;
								letter-spacing: 1px;
								margin: 0;
							}

							.subInfo {
								display: flex;
								font-size: 7px;
								color: #7a869a;
								justify-content: flex-end;
								align-items: center;
								line-height: 1.2;

								.comment {
									margin-right: 12px;
								}
							}
						}
					}
				`}
			</style>
		</>
	);
};

export default Link;
