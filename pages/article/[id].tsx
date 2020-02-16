import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useArticleQuery } from '../../lib/news.graphql';
import Icon from '../../components/Icon';
import withApollo from '../../lib/with-apollo';

interface Props {}

const Article: React.FC<Props> = () => {
	const router = useRouter();
	const id = router.query.id;

	const { data } = useArticleQuery({
		variables: {
			articleId: Array.isArray(id) ? id[0] : id
		}
	});

	if (!data) {
		return <Icon className="network-error" symbol={'iconbasketball2'} />;
	}

	const content = data.article.content.replace(/data-src/g, 'src');

	return (
		<Layout title={'文章'}>
			<div className="news">
				<div
					className="title"
					dangerouslySetInnerHTML={{ __html: data.article.title }}
				></div>
				<div
					className="info"
					dangerouslySetInnerHTML={{ __html: data.article.info }}
				></div>
				<div
					className="content"
					dangerouslySetInnerHTML={{ __html: content }}
				></div>
			</div>
			<style jsx>
				{`
					.news {
						padding: 20px 40px;

						.title {
							margin-top: 5px;
							font-size: 18px;
							font-weight: 700;
							line-height: 30px;
							color: #259;
						}

						.info {
							color: #999;
							font-size: 15px;
							line-height: 25px;
							padding-bottom: 24px;
							border-bottom: 1px solid #999;
						}

						.content {
							font-size: 15px;
							line-height: 1.6;
							color: #333;
							word-break: break-world;
						}
					}
				`}
			</style>
			<style jsx global>
				{`
					.lazy-load {
						width: 100%;
					}
				`}
			</style>
		</Layout>
	);
};

export default withApollo(Article, {
	ssr: true
});
