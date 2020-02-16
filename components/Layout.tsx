import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
	title: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children, title }) => {
	return (
		<div className="main">
			<Header title={title} />
			<main id="scrollableDiv" className="main-container">
				{children}
			</main>
			<Footer />
			<style jsx global>
				{`
					* {
						font-family: Menlo, Monaco, 'Lucida Console',
							'Liberation Mono', 'DejaVu Sans Mono',
							'Bitstream Vera Sans Mono', 'Courier New', monospace,
							serif;
					}
					html {
						height: 100%;
						font-size: 10vw;
					}
					body {
						width: 750px;
						height: 100%;
						margin: 0 auto;
					}

					.main {
						display: flex;
						flex-direction: column;
						height: 100vh;
					}

					.main-container {
						flex: 1;
						width: 100%;
						overflow: scroll;
						font-size: 12px;
					}

					*::-webkit-scrollbar {
						width: 0 !important;
					}
				`}
			</style>
		</div>
	);
};

export default Layout;
