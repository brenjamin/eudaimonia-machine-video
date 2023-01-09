import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';
import styled from 'styled-components';

import socrates from './img/socrates.png';
import aristotle from './img/aristotle.png';
import epicurus from './img/epicurus.png';
import thinker from './img/thinker.png';
import mother from './img/mother.jpg';
import friends from './img/friends.jpg';
import running from './img/running.jpg';
import studying from './img/studying.jpg';

const Title = styled.div`
	font-family: var(--sans);
	text-align: center;
	font-size: 35px;
	font-weight: 600;
`;

const BlockTitle = styled.div`
	font-family: var(--block);
	font-size: 250px;
	text-align: center;
	font-weight: bold;
`;

export const Scene4aAchieveEudaimonia: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	const mountainScale = interpolate(frame, [10, 20, 60, 70], [0, 1, 1, 0.4], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const mountainTranslateX = interpolate(frame, [60, 70], [0, -1400], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const mountainTranslateY = interpolate(frame, [60, 70], [0, -850], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const lifeOpacity1 = interpolate(frame, [70, 71], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const lifeOpacity2 = interpolate(frame, [75, 76], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const lifeOpacity3 = interpolate(frame, [80, 81], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const philosopherProgress = interpolate(frame, [110, 130], [100, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const bubble1Opacity1 = interpolate(frame, [210, 217], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubble1Opacity2 = interpolate(frame, [217, 224], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubble1Opacity3 = interpolate(frame, [224, 231], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const bubble2Opacity1 = interpolate(frame, [241, 248], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubble2Opacity2 = interpolate(frame, [248, 255], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubble2Opacity3 = interpolate(frame, [255, 262], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubble3Opacity1 = interpolate(frame, [272, 279], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubble3Opacity2 = interpolate(frame, [279, 286], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubble3Opacity3 = interpolate(frame, [286, 293], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubble4Opacity1 = interpolate(frame, [303, 310], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubble4Opacity2 = interpolate(frame, [310, 317], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubble4Opacity3 = interpolate(frame, [317, 324], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const fastSpin = interpolate(frame, [0, 90], [0, 360]);

	const thinkingProgress = interpolate(frame, [420, 650], [-100, 25], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const photosProgress = interpolate(frame, [670, 920], [25, -190], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						transform: `scale(${mountainScale}) translate(${mountainTranslateX}px, ${mountainTranslateY}px)`,
						transformOrigin: 'center center',
					}}
				>
					<svg
						height="800px"
						width="800px"
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 511.999 511.999"
						xml:space="preserve"
					>
						<path
							style={{fill: '#84DBFF'}}
							d="M495.644,507.173H377.523c-6.175,0-11.823-3.481-14.596-8.998l-59.053-117.418
                    c-2.323-4.619-2.323-10.064,0-14.683l59.053-117.418c6.028-11.988,23.177-11.966,29.194,0l118.121,234.836
                    C515.695,494.336,507.801,507.173,495.644,507.173z"
						/>
						<path
							style={{fill: '#F2F2F2'}}
							d="M86.178,315.648l96.163-191.193c2.774-5.516,8.421-8.998,14.597-8.998s11.823,3.481,14.597,8.998
                    l90.291,179.515c6.913,13.744-7.382,28.597-21.384,22.205l-65.382-29.853L106.666,338.23
                    C92.791,343.592,79.45,329.022,86.178,315.648z"
						/>
						<path
							style={{fill: '#CDD6E0'}}
							d="M301.826,303.971l-90.291-179.515c-2.774-5.516-8.421-8.998-14.597-8.998v187.871l18.121-7.006
                    l65.382,29.853C294.444,332.568,308.738,317.714,301.826,303.971z"
						/>
						<path
							style={{fill: '#84DBFF'}}
							d="M377.521,507.177H16.355c-12.162,0-20.05-12.841-14.597-23.681l84.42-167.849
                    c1.821-3.622,4.925-6.437,8.705-7.898l114.811-44.389c4.103-1.587,8.675-1.451,12.679,0.377l71.438,32.619
                    c3.419,1.503,6.287,4.16,8.025,7.615l90.283,179.526C397.58,494.36,389.658,507.177,377.521,507.177z"
						/>
						<path
							style={{fill: '#54C9EB'}}
							d="M510.24,483.491L392.119,248.654c-3.01-5.985-8.803-8.981-14.597-8.982v214.801l-75.686-150.502
                    c-1.737-3.455-4.607-6.112-8.025-7.615l-71.438-32.619c-4.004-1.828-8.576-1.963-12.679-0.377l-12.756,4.931v238.885h180.583
                    c0.049,0,0.096-0.004,0.145-0.004h117.977C507.801,507.173,515.695,494.336,510.24,483.491z"
						/>
						<path
							style={{fill: '#40596B'}}
							d="M196.939,148.131c-9.024,0-16.339-7.316-16.339-16.339V21.162c0-9.024,7.316-16.339,16.339-16.339
                    s16.339,7.316,16.339,16.339v110.63C213.278,140.815,205.963,148.131,196.939,148.131z"
						/>
						<path
							style={{fill: '#364C5C'}}
							d="M196.939,4.823L196.939,4.823v143.308l0,0c9.024,0,16.339-7.316,16.339-16.339V21.162
                    C213.278,12.138,205.963,4.823,196.939,4.823z"
						/>
						<path
							style={{fill: '#FF7058'}}
							d="M297.607,102.322H196.939c-9.024,0-16.339-7.316-16.339-16.339V21.162
                    c0-9.024,7.316-16.339,16.339-16.339h100.668c9.024,0,16.339,7.316,16.339,16.339v64.819
                    C313.946,95.006,306.631,102.322,297.607,102.322z"
						/>
						<path
							style={{fill: '#F1543F'}}
							d="M297.607,4.823H196.939l0,0v97.498l0,0h100.668c9.024,0,16.339-7.316,16.339-16.339V21.162
                    C313.946,12.138,306.631,4.823,297.607,4.823z"
						/>
					</svg>
				</div>
			</AbsoluteFill>
			<AbsoluteFill>
				<BlockTitle style={{paddingTop: '100px', paddingLeft: '300px'}}>
					<span style={{opacity: lifeOpacity1}}>A</span>&nbsp;
					<span style={{opacity: lifeOpacity2}}>Good</span>&nbsp;
					<span style={{opacity: lifeOpacity3}}>Life</span>
				</BlockTitle>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					alignItems: 'flex-end',
					transform: `translateY(${philosopherProgress}%)`,
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<div style={{position: 'relative', transform: `translateY(100px)`}}>
						<div>
							<svg
								fill="#000000"
								version="1.1"
								id="Capa_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								width="300px"
								height="300px"
								viewBox="0 0 46.127 46.127"
								xml:space="preserve"
							>
								<g>
									<g>
										<g style={{opacity: bubble1Opacity3}}>
											<path
												fill="black"
												d="M43.202,16.593c1.356-1.627,2.112-3.619,2.112-5.666c0-5.233-4.773-9.491-10.643-9.491c-2.492,0-4.847,0.758-6.744,2.153
														c-1.646-0.879-3.507-1.34-5.445-1.34c-5.868,0-10.643,4.257-10.643,9.491c0,0.328,0.021,0.659,0.062,0.991
														c-3.928,1.449-6.563,4.884-6.563,8.761c0,5.125,4.578,9.313,10.279,9.485c2.042,2.785,5.523,4.482,9.302,4.482
														c3.094,0,5.99-1.125,8.088-3.116c0.815,0.175,1.645,0.264,2.477,0.264c5.867,0,10.643-4.257,10.643-9.49
														C46.127,20.682,45.059,18.342,43.202,16.593z"
											/>
											<path
												fill="white"
												d="M35.484,29.607c-0.85,0-1.696-0.125-2.52-0.37c-0.561-0.168-1.168,0.006-1.555,0.445
														c-1.557,1.766-3.926,2.909-6.49,2.777c-8.005-0.408-7.938-6.043-7.939-7.258c-0.001-0.972,0.136-1.578,0.136-1.578
														c0.166-0.711-0.909-0.959-1.072-0.25c0.135-0.448-0.681,1.967-0.191,4.604c-4.153-0.059-7.514-2.943-7.514-6.485
														c0-2.919,2.322-5.492,5.647-6.257c0.404-0.093,0.752-0.35,0.96-0.708c0.208-0.358,0.259-0.788,0.14-1.185
														c-0.163-0.544-0.246-1.083-0.246-1.601c0-3.579,3.429-6.491,7.643-6.491c1.731,0,3.37,0.488,4.739,1.412
														c0.573,0.389,1.34,0.333,1.853-0.137c1.469-1.346,3.457-2.088,5.599-2.088c4.215,0,7.643,2.912,7.643,6.491
														c0,1.754-0.823,3.402-2.318,4.642c0,0-2.471-0.394-3.799-0.253c-0.93,0.098-0.82,1.056-0.211,1.133
														c0.002,0,0.574,0.073,1.441,0.322c0.784,0.232,1.785,0.625,2.672,1.181c0.012,0.008,0.02,0.019,0.03,0.026
														c1.904,1.247,2.996,3.12,2.996,5.138C43.127,26.695,39.698,29.607,35.484,29.607z"
											/>
										</g>
										<g style={{opacity: bubble1Opacity2}}>
											<path
												fill="black"
												d="M9.92,31.519c-2.346,0-4.254,1.908-4.254,4.253c0,2.346,1.908,4.253,4.254,4.253c2.345,0,4.253-1.907,4.253-4.253
														C14.173,33.427,12.265,31.519,9.92,31.519z"
											/>
											<path
												fill="white"
												d="M9.92,38.026c-1.243,0-2.254-1.011-2.254-2.253c0-1.241,1.011-2.254,2.254-2.254
														c1.242,0,2.253,1.011,2.253,2.253S11.162,38.026,9.92,38.026z"
											/>
										</g>
										<g style={{opacity: bubble1Opacity1}}>
											<path
												fill="black"
												d="M2.92,38.853c-1.61,0-2.92,1.31-2.92,2.919s1.31,2.919,2.92,2.919c1.609,0,2.919-1.31,2.919-2.919
														S4.529,38.853,2.92,38.853z"
											/>
											<path
												fill="white"
												d=" M2.92,42.692c-0.507,0-0.92-0.413-0.92-0.919s0.413-0.919,0.92-0.919c0.507,0,0.919,0.413,0.919,0.919
														S3.427,42.692,2.92,42.692z"
											/>
										</g>
									</g>
								</g>
							</svg>
						</div>
						<Title
							style={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-35%, -120%)',
								opacity: bubble1Opacity3,
							}}
						>
							virtue
						</Title>
					</div>
					<img
						src={socrates}
						style={{
							width: 'auto',
							height: '400px',
							transform: `translateY(60px)`,
						}}
						alt=""
					/>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',

						alignItems: 'center',
					}}
				>
					<div
						style={{
							transform: `translate(20px, 90px)`,
							position: 'relative',
						}}
					>
						<div>
							<svg
								width="340"
								viewBox="0 0 24 24"
								width="340"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g style={{opacity: bubble2Opacity1}}>
									<path
										d="m4 18c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
										fill="black"
										fill-rule="evenodd"
									/>
									<path
										d="m4 19.5c-.27614237 0-.5.2238576-.5.5s.22385763.5.5.5.5-.2238576.5-.5-.22385763-.5-.5-.5z"
										fill="white"
									/>
								</g>
								<g style={{opacity: bubble2Opacity2}}>
									<path
										fill="black"
										d="m9.5 15c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5z"
									/>
									<path
										fill="white"
										d="m9.5 16.5c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
									/>
								</g>
								<g style={{opacity: bubble2Opacity3}}>
									<path
										fill="black"
										d="m11.8235294 2c2.6592222 0 4.8838018 1.92259542 5.3302255 4.47059089l.0815392-.00000265c2.0791897 0 3.7647059 1.68551623 3.7647059 3.76470586 0 2.0791897-1.6855162 3.7647059-3.7647059 3.7647059h-10.82352939c-2.07918965 0-3.76470589-1.6855162-3.76470589-3.7647059 0-2.07918963 1.68551624-3.76470586 3.76472883-3.76470586l.08151627.00000265c.4464237-2.54799547 2.67100326-4.47059089 5.33022548-4.47059089z"
									/>
									<path
										fill="white"
										d="m11.8291192 3.49762123c-2.09615957 0-3.82054647 1.64509758-3.92319413 3.72834595-.01817547.36887366-.3227742.65862192-.69236565.65860991l-.69883417-.0000227c-1.27611249 0-2.31060606 1.0337352-2.31060606 2.30891221 0 1.275177 1.03449357 2.3089122 2.31060606 2.3089122h10.62878785c1.2761125 0 2.3106061-1.0337352 2.3106061-2.3089122 0-1.27517701-1.0344936-2.30891221-2.3105835-2.30891221l-.6988567.0000227c-.3695915.00001201-.6741902-.28973625-.6923657-.65860991-.1026477-2.08324837-1.8270345-3.72834595-3.9231941-3.72834595z"
									/>
								</g>
							</svg>
						</div>
						<Title
							style={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -120%)',
								opacity: bubble2Opacity3,
							}}
						>
							rationality
						</Title>
					</div>
					<img
						src={aristotle}
						style={{
							width: 'auto',
							height: '400px',
							transform: `translateY(70px)`,
						}}
						alt=""
					/>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',

						alignItems: 'center',
					}}
				>
					<div style={{position: 'relative', transform: `translateY(60px)`}}>
						<div style={{transform: 'scaleX(-1)'}}>
							<svg
								width="300px"
								height="300px"
								viewBox="0 0 17 17"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
							>
								<g style={{opacity: bubble3Opacity3}}>
									<path
										d="M11.5 10.116c3.033 0 5.5-2.269 5.5-5.058s-2.467-5.058-5.5-5.058c-1.912 0-3.693 0.938-4.684 2.431-0.705-0.399-1.496-0.608-2.316-0.608-2.481 0-4.5 1.86-4.5 4.147 0 2.286 2.019 4.146 4.5 4.146 0.186 0 0.375-0.013 0.573-0.037 0.652 0.588 1.522 0.921 2.427 0.921 1.002 0 1.929-0.387 2.592-1.070 0.488 0.125 0.951 0.186 1.408 0.186z"
										fill="#000000"
									/>
									<path
										d="M9.745 8.785l-0.212 0.268c-0.471 0.593-1.231 0.947-2.033 0.947-0.724 0-1.414-0.29-1.895-0.797l-0.184-0.193-0.264 0.046c-0.214 0.037-0.431 0.060-0.657 0.060-1.93 0-3.5-1.411-3.5-3.145 0-1.735 1.57-3.147 3.5-3.147 0.792 0 1.549 0.246 2.189 0.713l0.472 0.343 0.267-0.52c0.738-1.433 2.336-2.36 4.072-2.36 2.481 0 4.5 1.82 4.5 4.059 0 2.237-2.019 4.058-4.5 4.058-0.453 0-0.921-0.075-1.429-0.231l-0.326-0.101z"
										fill="white"
									></path>
								</g>
								<g style={{opacity: bubble3Opacity2}}>
									<path
										d="M11.5 10.5c-1.103 0-2 0.897-2 2s0.897 2 2 2 2-0.897 2-2-0.897-2-2-2z"
										fill="black"
									></path>
									<path
										d="M11.5 13.5c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1z"
										fill="white"
									></path>
								</g>
								<g style={{opacity: bubble3Opacity1}}>
									<path
										d="M15.25 14c-0.689 0-1.25 0.561-1.25 1.25s0.561 1.25 1.25 1.25 1.25-0.561 1.25-1.25-0.561-1.25-1.25-1.25z"
										fill="black"
									></path>
									<path
										d="M15 15.25c0-0.138 0.112-0.25 0.25-0.25s0.25 0.112 0.25 0.25c0 0.275-0.5 0.275-0.5 0z"
										fill="white"
									></path>
								</g>
							</svg>
						</div>
						<Title
							style={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -140%)',
								opacity: bubble3Opacity3,
							}}
						>
							hedonism
						</Title>
					</div>
					<img
						src={epicurus}
						style={{
							width: 'auto',
							height: '400px',
							transform: `translateY(60px)`,
						}}
						alt=""
					/>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<div style={{position: 'relative', transform: `translateY(60px)`}}>
						<div>
							<svg
								width="300px"
								height="300px"
								viewBox="0 0 128 128"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--noto"
								preserveAspectRatio="xMidYMid meet"
							>
								<path
									d="M120.44 51.23a29.87 29.87 0 0 0 2.96-13.02c0-16.6-13.45-30.05-30.05-30.05c-3.89 0-7.61.75-11.03 2.1C77.95 6.45 72.22 4.1 66 4.1c-7.6 0-14.4 3.4-18.9 8.7c-3.5-1.9-7.5-3-11.7-3c-13.4.1-24.3 10.9-24.3 24.3c0 5 1.5 9.7 4.2 13.6c-5 4-8.5 9.9-9.2 16.8C4.8 77.9 14.7 90 28.3 91.3c3.2.3 6.2 0 9.1-.8c1.1 10.7 10.1 19 21.1 19c7 0 13.2-3.4 17-8.6c3.6 2.8 8.1 4.6 13.1 4.6c11 0 20.1-8.5 20.9-19.2C118 82.4 124 73.8 124 63.8c0-4.59-1.33-8.92-3.56-12.57z"
									fill="#ffffff"
									stroke="#000000"
									stroke-width="6"
									stroke-miterlimit="10"
									opacity={bubble4Opacity3}
								></path>
								<path
									d="M24.3 97.3c-4.5-.5-8.5 2.8-9 7.3s2.8 8.5 7.3 8.9c4.5.5 8.5-2.8 9-7.3s-2.8-8.5-7.3-8.9z"
									fill="#ffffff"
									stroke="#000000"
									stroke-width="4.5"
									stroke-miterlimit="10"
									opacity={bubble4Opacity2}
								></path>
								<path
									d="M9 114.3c-3-.3-5.7 1.9-6 4.9s1.9 5.6 4.9 5.9s5.7-1.9 6-4.9c.3-2.9-1.9-5.6-4.9-5.9z"
									fill="#ffffff"
									stroke="#000000"
									stroke-width="4.5"
									stroke-miterlimit="10"
									opacity={bubble4Opacity1}
								></path>
							</svg>
						</div>
						<Title
							style={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -70%)',
								opacity: bubble4Opacity3,
							}}
						>
							a eudaimon life
						</Title>
					</div>
					<img
						src={thinker}
						style={{
							width: 'auto',
							height: '400px',
							transform: `translateY(60px)`,
						}}
						alt=""
					/>
				</div>
			</AbsoluteFill>
			<Sequence from={350} durationInFrames={Infinity}>
				<AbsoluteFill
					style={{
						backgroundColor: 'var(--yellow)',
						transform: `translateY(0%)`,
					}}
				>
					<div
						style={{
							display: 'flex',
							height: '100%',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<img
							style={{
								alignSelf: 'flex-end',
								display: 'block',
								height: '95%',
								width: 'auto',
							}}
							src={aristotle}
						/>
						<div
							style={{
								height: '200%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-around',
								alignItems: 'center',
								transform: `translateY(${thinkingProgress}%)`,
								position: 'relative',
								left: '-125px',
							}}
						>
							<BlockTitle style={{fontSize: '300px'}}>
								Deep
								<br />
								Work
							</BlockTitle>
							<div>
								<svg
									width="800px"
									height="800px"
									viewBox="0 0 32 32"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g data-name="33. Thinking" id="_33._Thinking">
										<path
											className="cls-1"
											d="M27,32H12a1,1,0,0,1-1-1V28H9a3,3,0,0,1-3-3V21.618L2.553,19.9a1,1,0,0,1-.385-1.45L6,12.691A12.995,12.995,0,0,1,29.551,5.414,1,1,0,1,1,27.93,6.586,11,11,0,0,0,8,13a1.006,1.006,0,0,1-.168.555L4.46,18.612l2.987,1.493A1,1,0,0,1,8,21v4a1,1,0,0,0,1,1h3a1,1,0,0,1,1,1v3H26V27.966a18.1,18.1,0,0,1,2.445-9.316,11,11,0,0,0,1.5-6.779,10.42,10.42,0,0,0-.287-1.62,1,1,0,0,1,1.936-.5,12.656,12.656,0,0,1,.342,1.927,12.969,12.969,0,0,1-1.775,8A16.1,16.1,0,0,0,28,27.966V31A1,1,0,0,1,27,32Z"
										/>

										<path
											className="cls-1"
											d="M14,28H12a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"
										/>

										<path
											className="cls-2"
											style={{
												transform: `rotate(${fastSpin}deg)`,
												transformOrigin: 'center center',
												transformBox: 'fill-box',
											}}
											d="M20.072,19H17.928A1.931,1.931,0,0,1,16,17.189a1.927,1.927,0,0,1-2.529-.761L12.4,14.572A1.933,1.933,0,0,1,13.007,12,1.933,1.933,0,0,1,12.4,9.428l1.072-1.856A1.927,1.927,0,0,1,16,6.811,1.931,1.931,0,0,1,17.928,5h2.144A1.929,1.929,0,0,1,22,6.811a1.927,1.927,0,0,1,2.53.762L25.6,9.428h0A1.933,1.933,0,0,1,24.993,12a1.933,1.933,0,0,1,.606,2.571l-1.073,1.857a1.928,1.928,0,0,1-2.53.761A1.929,1.929,0,0,1,20.072,19ZM18,17h2a1.929,1.929,0,0,1,2.828-1.634l1-1.733a1.928,1.928,0,0,1,0-3.266l-1-1.733A1.929,1.929,0,0,1,20,7H18a1.929,1.929,0,0,1-2.828,1.633l-1,1.734a1.928,1.928,0,0,1,0,3.266l1,1.734A1.929,1.929,0,0,1,18,17Zm4.893-1.6Zm2-3.339Zm-2.1-3.49Z"
										/>

										<path
											className="cls-2"
											d="M19,14a2,2,0,1,1,2-2A2,2,0,0,1,19,14Zm0-2v0Z"
										/>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</AbsoluteFill>
			</Sequence>
			<Sequence from={670} durationInFrames={Infinity}>
				<AbsoluteFill
					style={{
						backgroundColor: 'var(--blue)',
						justifyContent: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '48px',
							transform: `translateX(${photosProgress}%)`,
						}}
					>
						<img
							src={mother}
							style={{
								width: '1300px',
								border: '40px solid white',
								boxShadow: '5px 5px 6px rgba(0,0,0,.1)',
							}}
							alt=""
						/>
						<img
							src={friends}
							style={{
								width: '1300px',
								border: '40px solid white',
								boxShadow: '5px 5px 6px rgba(0,0,0,.1)',
							}}
							alt=""
						/>
						<img
							src={running}
							style={{
								width: '1300px',
								border: '40px solid white',
								boxShadow: '5px 5px 6px rgba(0,0,0,.1)',
							}}
							alt=""
						/>
						<img
							src={studying}
							style={{
								width: '1300px',
								border: '40px solid white',
								boxShadow: '5px 5px 6px rgba(0,0,0,.1)',
							}}
							alt=""
						/>
					</div>
				</AbsoluteFill>
			</Sequence>
		</>
	);
};
