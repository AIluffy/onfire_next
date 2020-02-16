import React from 'react';

interface Props {
	title: React.ReactNode;
}

const Header: React.FC<Props> = ({ title }) => {
	return (
		<>
			<header className="nav">{title}</header>
			<style jsx>{`
				.nav {
					flex-shrink: 0;
					width: 100%;
					height: 84px;
					background-image: linear-gradient(
						108deg,
						#4d9edc 0%,
						hsl(206, 93%, 44%) 100%
					);
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 20px;
					font-weight: 500;
					letter-spacing: 1px;
					color: #fff;
				}
			`}</style>
		</>
	);
};

export default Header;
