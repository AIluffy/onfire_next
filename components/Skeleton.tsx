import React from 'react';

interface Props {}

const Skeleton: React.FC<Props> = () => {
	return (
		<>
			<div className="skeleton">
				{Array.from({ length: 6 }).map((item, index) => (
					<div className="item-box" key={index}>
						<div className="item-img skeleton-animation"></div>
						<div className="item-info">
							<div className="title">
								<div className="line1 skeleton-animation"></div>
								<div className="line2 skeleton-animation"></div>
							</div>
							<div className="sub-info skeleton-animation"></div>
						</div>
					</div>
				))}
			</div>
			<style jsx>
				{`
					.skeleton {
						width: 100%;
						height: 100%;
						overflow: hidden;

						.item-box {
							width: 100%;
							height: 180px;
							display: flex;
							align-items: center;
							padding: 0 4px;
							box-sizing: border-box;
							border-bottom: 1px solid #f0f0f0;

							.item-img {
								width: 220px;
								height: 136px;
								display: flex;
								justify-content: center;
								align-items: center;
								overflow: hidden;
							}

							.item-info {
								position: relative;
								flex: 1;
								height: 100%;
								margin-left: 20px;
								padding: 10px 0 8px;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								box-sizing: border-box;
								.title {
									height: 80px;
									margin: 0;

									.line1 {
										width: 100%;
										height: 30px;
									}

									.line2 {
										margin-top: 16px;
										width: 60%;
										height: 30px;
									}
								}

								.sub-info {
									width: 40%;
									height: 16px;
									position: absolute;
									right: 0;
									bottom: 8px;
								}
							}
						}
					}

					.skeleton-animation {
						background: linear-gradient(
							90deg,
							#f2f2f2 25%,
							#e6e6e6 37%,
							#f2f2f2 63%
						);
						background-size: 400% 100%;
						animation: skeleton-loading 1.4s ease infinite;
					}

					@keyframes skeleton-loading {
						0% {
							background-position: 100% 50%;
						}
						100% {
							background-position: 0 50%;
						}
					}
				`}
			</style>
		</>
	);
};

export default Skeleton;
