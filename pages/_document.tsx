import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<script src="//at.alicdn.com/t/font_1571310_tnezttjt2fo.js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
