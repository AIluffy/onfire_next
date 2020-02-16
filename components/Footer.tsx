import React from 'react';
import Link from 'next/link';
import { NAV_LIST } from '../utils';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import Icon from './Icon';
interface Props {}

const Footer: React.FC<Props> = () => {
	const { pathname } = useRouter();
	return (
		<>
			<footer className="tab">
				{NAV_LIST.map(nav => (
					<Link href={nav.href} key={nav.name}>
						<div className="tab-item">
							{nav.href === pathname ? (
								<Icon
									symbol={nav.activeIcon}
									className="icon-news"
								/>
							) : (
								<Icon symbol={nav.icon} className="icon-news" />
							)}
							<p
								className={classnames('tab-title', {
									active: nav.href === pathname
								})}
							>
								{nav.name}
							</p>
						</div>
					</Link>
				))}
			</footer>
			<style jsx>{`
				.tab {
					display: flex;
					flex-shrink: 0;
					width: 100%;
					height: 90px;
					justify-content: center;
					align-items: center;
					background-color: #fff;
					box-shadow: 0 -2px 6px #f0f1f2;

					.tab-item {
						flex: 1;
						width: 80px;
						height: 100%;
						box-sizing: border-box;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						font-size: 18px;

						&:first-child {
							border-right: 1px solid #fff;
						}
					}

					.tab-title {
						margin: 2px 0 0 0;
						font-size: 14px;
						letter-spacing: 0.4px;
						color: #333;

						&.active {
							color: blue;
						}
					}
				}
			`}</style>
		</>
	);
};

export default Footer;
