import withApollo from '../lib/with-apollo';
import Layout from '../components/Layout';
import InfiniteLinkScroller from '../components/InfiniteLinkScroller';

const Index = () => (
	<Layout title={'首页'}>
		<InfiniteLinkScroller />
	</Layout>
);

export default withApollo(Index, {
	ssr: false
});
