import React from 'react';

interface Props {
	symbol: string;
	className?: string;
}

const Icon: React.FC<Props> = ({ symbol, className }) => (
	<>
		<svg className={`icon ${className}`} aria-hidden="true">
			<use xlinkHref={`#${symbol}`}></use>
		</svg>
		<style jsx>{`
			.icon {
				width: 1em;
				height: 1em;
				vertical-align: -0.15em;
				fill: currentColor;
				overflow: hidden;
			}
		`}</style>
	</>
);

export default Icon;
