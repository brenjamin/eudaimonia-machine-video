import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';
import styled from 'styled-components';
import machine from './img/eudaimonia-machine.png';
import thinker from './img/thinker.png';
import earth from './img/earth.jpeg';
import {Animation} from 'remotion-animation';

export const Scene14EudaimoniaOutro: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();

	const slowSpin = interpolate(frame, [0, 180], [0, 360]);
	const fastSpin = interpolate(frame, [0, 90], [0, 360]);
	const fastReverse = interpolate(frame, [0, 90], [0, -360]);
	const reverseSpin = interpolate(frame, [0, 45], [0, -360]);

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
		text-align: center;
	`;

	const slideProgress = interpolate(
		frame,
		[0, 119, 120, 140],
		[-100, -100, -100, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	const AltTitle = styled.div`
		font-family: var(--sans);
		font-weight: 600;
		font-size: 75px;
		text-align: center;
	`;
	const bubbleOpacity1 = interpolate(frame, [320, 327], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubbleOpacity2 = interpolate(frame, [327, 334], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubbleOpacity3 = interpolate(frame, [334, 341], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const earthScale = interpolate(frame, [400, 410], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
		easing: Easing.bounce,
	});
	const earthBg = interpolate(frame, [400, 600], [0, -175], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const slideOut = interpolate(frame, [990, 1020], [0, -100], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const question1Translate = interpolate(frame, [610, 620], [-20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const question1Opacity = interpolate(frame, [610, 620], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const question2Translate = interpolate(frame, [770, 780], [-20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const question2Opacity = interpolate(frame, [770, 780], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={{transform: `translateX(${slideOut}%)`}}>
			<AbsoluteFill style={{backgroundColor: 'var(--yellow)'}}>
				<div
					style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						top: '40px',
					}}
				>
					<Title
						style={{
							position: 'absolute',
							top: '25px',
							transform: 'translateX(-50%)',
							fontSize: '175px',
							left: '50%',
							width: '100%',
						}}
					>
						The Eudaimonia Machine
					</Title>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-evenly',
							width: '85%',
							gap: '48px',
							paddingTop: '225px',
						}}
					>
						<Title style={{transform: 'translateX(0px)'}}>Gallery</Title>
						<Title style={{transform: 'translateX(25px)'}}>Salon</Title>
						<Title style={{transform: 'translateX(40px)'}}>Library</Title>
						<Title style={{transform: 'translateX(15px)'}}>
							Office
							<br />
							Space
						</Title>
						<Title style={{transform: 'translateX(15px)'}}>
							Deep Work
							<br />
							Chambers
						</Title>
					</div>
					<img
						src={machine}
						style={{
							transform: `scaleX(-1) translateX(30px)`,
							width: '85%',
						}}
					/>
				</div>
				<AbsoluteFill
					style={{
						backgroundColor: 'var(--blue)',
						transform: `translateY(${slideProgress}%)`,
					}}
				>
					<Sequence
						from={140}
						style={{
							position: 'relative',
							height: '100%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
						}}
					>
						<Animation
							duration={3.5}
							f0={{opacity: 0, transform: 'translateX(-30px)'}}
							f15={{opacity: 0.5, transform: 'translateX(30px)'}}
							f30={{opacity: 1, transform: 'translateX(0)'}}
						>
							<AltTitle>
								<span style={{fontSize: '180px'}}>🌊</span>
								<br />
								Achieve
								<br />
								Flow
							</AltTitle>
						</Animation>
						<Animation
							duration={3.5}
							f0={{opacity: 0, transform: 'scale(1)'}}
							f35={{opacity: 0, transform: 'scale(1)'}}
							f50={{opacity: 0.5, transform: 'scale(1.1)'}}
							f55={{opacity: 1, transform: 'scale(1)'}}
						>
							<AltTitle>
								<span style={{fontSize: '180px'}}>🎧</span>
								<br />
								Perform
								<br />
								Deep Work
							</AltTitle>
						</Animation>
						<Animation
							duration={3.5}
							f0={{opacity: 0, transform: 'translateY(30px)'}}
							f70={{opacity: 0, transform: 'translateY(30px)'}}
							f85={{opacity: 0.5, transform: 'translateY(-30px)'}}
							f100={{opacity: 1, transform: 'translateY(0px)'}}
						>
							<AltTitle>
								<span style={{fontSize: '180px'}}>⛰️</span>
								<br />
								Reach
								<br />
								Peak Potential
							</AltTitle>
						</Animation>
					</Sequence>
				</AbsoluteFill>
			</AbsoluteFill>
			<Sequence from={290}>
				<AbsoluteFill style={{backgroundColor: 'var(--yellow)'}}>
					<img
						src={thinker}
						alt=""
						style={{
							transform: 'scaleX(-1)',
							width: width / 2,
							bottom: -250,
							left: -100,
							position: 'absolute',
						}}
					/>
					<div style={{position: 'absolute', left: 650}}>
						<svg
							width="500px"
							height="500px"
							viewBox="0 0 128 128"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							className="iconify iconify--noto"
							preserveAspectRatio="xMidYMid meet"
						>
							<p
								d="M120.44 51.23a29.87 29.87 0 0 0 2.96-13.02c0-16.6-13.45-30.05-30.05-30.05c-3.89 0-7.61.75-11.03 2.1C77.95 6.45 72.22 4.1 66 4.1c-7.6 0-14.4 3.4-18.9 8.7c-3.5-1.9-7.5-3-11.7-3c-13.4.1-24.3 10.9-24.3 24.3c0 5 1.5 9.7 4.2 13.6c-5 4-8.5 9.9-9.2 16.8C4.8 77.9 14.7 90 28.3 91.3c3.2.3 6.2 0 9.1-.8c1.1 10.7 10.1 19 21.1 19c7 0 13.2-3.4 17-8.6c3.6 2.8 8.1 4.6 13.1 4.6c11 0 20.1-8.5 20.9-19.2C118 82.4 124 73.8 124 63.8c0-4.59-1.33-8.92-3.56-12.57z"
								fill="#ffffff"
								stroke="#000000"
								strokeWidth="6"
								strokeMiterlimit="10"
								opacity={bubbleOpacity3}
							/>
							<
								d="M24.3 97.3c-4.5-.5-8.5 2.8-9 7.3s2.8 8.5 7.3 8.9c4.5.5 8.5-2.8 9-7.3s-2.8-8.5-7.3-8.9z"
								fill="#ffffff"
								stroke="#000000"
								stroke-width="4.5"
								stroke-miterlimit="10"
								opacity={bubbleOpacity2}
							/>
							<path
								d="M9 114.3c-3-.3-5.7 1.9-6 4.9s1.9 5.6 4.9 5.9s5.7-1.9 6-4.9c.3-2.9-1.9-5.6-4.9-5.9z"
								fill="#ffffff"
								stroke="#000000"
								stroke-width="4.5"
								stroke-miterlimit="10"
								opacity={bubbleOpacity1}
							></path>
						</svg>
						<svg
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 469.122 469.122"
							xml:space="preserve"
							style={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-44%, -65%)',
								opacity: bubbleOpacity3,
								width: 300,
							}}
						>
							<g>
								<path
									style={{fill: '#496A72'}}
									d="M102.43,159.716c0,15.46-12.53,28-28,28c-1.71,0-3.38-0.15-5-0.45c-13.08-2.35-23-13.8-23-27.55
		s9.92-25.2,23-27.55c1.62-0.3,3.29-0.45,5-0.45C89.9,131.716,102.43,144.255,102.43,159.716z"
								/>
								<path
									style={{fill: '#345156'}}
									d="M92.43,159.716c0,13.75-9.92,25.2-23,27.55c-13.08-2.35-23-13.8-23-27.55s9.92-25.2,23-27.55
		C82.51,134.516,92.43,145.966,92.43,159.716z"
								/>
								<rect
									x="355.284"
									y="146.465"
									style={{fill: '#CCCCCC'}}
									width="20.216"
									height="57"
								/>
								<rect
									x="350.346"
									y="249.965"
									style={{fill: '#E6E6E6'}}
									width="79.655"
									height="50"
								/>
								<rect
									x="131.205"
									y="189.465"
									style={{fill: '#CCCCCC'}}
									width="219.141"
									height="134"
								/>
								<g>
									<rect
										x="215.5"
										y="270.465"
										style={{fill: '#738B93'}}
										width="19.5"
										height="45"
									/>
									<rect
										x="210.5"
										y="270.465"
										style={{fill: '#244D54'}}
										width="5"
										height="45"
									/>
									<rect
										x="221.5"
										y="276.465"
										style={{fill: '#244D54'}}
										width="7.5"
										height="33"
									/>
									<polygon
										style={{fill: '#808080'}}
										points="254.12,315.846 249.88,320.086 221.5,291.706 221.5,283.226 		"
									/>
									<circle
										style={{fill: '#EF7954'}}
										cx="252"
										cy="317.965"
										r="7"
									/>
								</g>
								<rect
									x="350.346"
									y="203.465"
									style={{fill: '#999999'}}
									width="91.655"
									height="21"
								/>
								<rect
									x="350.346"
									y="224.465"
									style={{fill: '#CCCCCC'}}
									width="83.988"
									height="15"
								/>
								<rect
									x="350.346"
									y="239.465"
									style={{fill: '#999999'}}
									width="91.655"
									height="10.5"
								/>
								<rect
									x="350.346"
									y="299.965"
									style={{fill: '#999999'}}
									width="91.655"
									height="10.5"
								/>
								<rect
									x="98.341"
									y="189.465"
									style={{fill: '#808080'}}
									width="32.864"
									height="134"
								/>
								<g>
									<rect
										x="52.357"
										y="249.965"
										style={{fill: '#E6E6E6'}}
										width="78.644"
										height="50"
									/>
									<rect
										x="12"
										y="249.965"
										style={{fill: '#B3B3B3'}}
										width="40.356"
										height="50"
									/>
								</g>
								<rect
									x="39.55"
									y="203.465"
									style={{fill: '#999999'}}
									width="91.655"
									height="21"
								/>
								<rect
									x="52.356"
									y="224.465"
									style={{fill: '#CCCCCC'}}
									width="91.655"
									height="15"
								/>
								<rect
									x="39.55"
									y="239.465"
									style={{fill: '#999999'}}
									width="91.655"
									height="10.5"
								/>
								<rect
									x="0"
									y="203.465"
									style={{fill: '#808080'}}
									width="39.55"
									height="21"
								/>
								<rect
									x="0"
									y="125.657"
									style={{fill: '#B3B3B3'}}
									width="39.55"
									height="77.809"
								/>
								<rect
									x="12"
									y="224.465"
									style={{fill: '#B3B3B3'}}
									width="40.356"
									height="15"
								/>
								<rect
									x="0"
									y="239.465"
									style={{fill: '#808080'}}
									width="39.55"
									height="10.5"
								/>
								<rect
									x="39.55"
									y="299.965"
									style={{fill: '#999999'}}
									width="91.655"
									height="10.5"
								/>
								<rect
									x="0"
									y="299.965"
									style={{fill: '#808080'}}
									width="39.55"
									height="10.5"
								/>
								<path
									style={{
										fill: '#496A72',
										transformOrigin: 'center center',
										transformBox: 'fill-box',
									}}
									transform={`rotate(${fastSpin})`}
									d="M335.531,282.201c18.147-18.147,18.147-47.569,0-65.716c-18.147-18.147-47.569-18.147-65.716,0
		s-18.147,47.569,0,65.716C287.962,300.348,317.384,300.348,335.531,282.201z M283.765,273.646l14.245-14.245
		c2.953,1.368,6.374,1.368,9.327,0l14.245,14.245C310.492,282.295,294.854,282.295,283.765,273.646z M326.976,268.251
		l-14.245-14.245c1.368-2.953,1.368-6.374,0-9.327l14.245-14.245C335.625,241.524,335.625,257.162,326.976,268.251z M321.581,225.04
		l-14.245,14.245c-2.953-1.368-6.374-1.368-9.327,0l-14.245-14.245C294.854,216.391,310.492,216.391,321.581,225.04z
		 M278.37,230.435l14.245,14.245c-1.368,2.953-1.368,6.374,0,9.327l-14.245,14.245C269.721,257.162,269.721,241.524,278.37,230.435z
		"
								/>
								<rect
									x="121.667"
									y="189.465"
									style={{fill: '#808080'}}
									width="9.538"
									height="134"
								/>
								<path
									style={{
										fill: '#496A72',
										transformOrigin: 'center center',
										transformBox: 'fill-box',
									}}
									transform={`rotate(${slowSpin})`}
									d="M194.064,226.782c-13.271-13.271-34.788-13.271-48.06,0c-13.271,13.271-13.271,34.788,0,48.06
		s34.788,13.271,48.06,0C207.335,261.57,207.335,240.053,194.064,226.782z M187.807,264.64l-10.418-10.418
		c1.001-2.159,1.001-4.662,0-6.821l10.418-10.418C194.133,245.094,194.133,256.53,187.807,264.64z M183.862,233.038l-10.418,10.418
		c-2.159-1.001-4.662-1.001-6.821,0l-10.418-10.418C164.316,226.713,175.752,226.713,183.862,233.038z M152.261,236.984
		l10.418,10.418c-1.001,2.159-1.001,4.662,0,6.821l-10.418,10.418C145.935,256.53,145.935,245.094,152.261,236.984z
		 M156.206,268.585l10.418-10.418c2.159,1.001,4.662,1.001,6.821,0l10.418,10.418C175.752,274.91,164.316,274.91,156.206,268.585z"
								/>
								<path
									style={{
										fill: '#496A72',
										transformOrigin: 'center center',
										transformBox: 'fill-box',
									}}
									transform={`rotate(${reverseSpin})`}
									d="M457.112,122.718c-16.013-16.013-41.976-16.013-57.989,0c-16.013,16.013-16.013,41.976,0,57.989
		c16.013,16.013,41.976,16.013,57.989,0C473.125,164.694,473.125,138.731,457.112,122.718z M449.562,168.397l-12.57-12.57
		c1.207-2.605,1.207-5.625,0-8.23l12.57-12.57C457.195,144.813,457.195,158.612,449.562,168.397z M444.802,130.267l-12.57,12.57
		c-2.605-1.207-5.625-1.207-8.23,0l-12.57-12.57C421.217,122.635,435.017,122.635,444.802,130.267z M406.672,135.027l12.57,12.57
		c-1.207,2.605-1.207,5.625,0,8.23l-12.57,12.57C399.039,158.612,399.039,144.813,406.672,135.027z M411.432,173.158l12.57-12.57
		c2.605,1.207,5.625,1.207,8.23,0l12.57,12.57C435.017,180.79,421.217,180.79,411.432,173.158z"
								/>
								<g>
									<g>
										<rect
											x="41.455"
											y="101.324"
											style={{fill: '#808080'}}
											width="34.762"
											height="8.111"
										/>
										<rect
											x="10.556"
											y="101.324"
											style={{fill: '#999999'}}
											width="30.899"
											height="8.111"
										/>
										<rect
											x="41.455"
											y="117.546"
											style={{fill: '#808080'}}
											width="34.762"
											height="8.111"
										/>
										<rect
											x="10.556"
											y="117.546"
											style={{fill: '#999999'}}
											width="30.899"
											height="8.111"
										/>
										<rect
											x="43"
											y="109.435"
											style={{fill: '#B3B3B3'}}
											width="28.968"
											height="8.111"
										/>
										<rect
											x="14.032"
											y="109.435"
											style={{fill: '#CCCCCC'}}
											width="28.968"
											height="8.111"
										/>
									</g>
									<g>
										<rect
											x="23.72"
											y="65.324"
											width="69.333"
											height="4.667"
											style={{
												fill: '#999999',
											}}
										/>
										<path
											style={{fill: '#999999'}}
											d="M97.053,59.657h2c4.418,0,8,3.582,8,8v0c0,4.418-3.582,8-8,8h-2c-4.418,0-8-3.582-8-8v0
			C89.053,63.239,92.635,59.657,97.053,59.657z"
										/>
									</g>

									<rect
										x="20.386"
										y="79.99"
										style={{fill: '#999999'}}
										width="46"
										height="21.333"
									/>
									<rect
										x="37.72"
										y="58.657"
										style={{fill: '#808080'}}
										width="11.333"
										height="21.333"
									/>
									<rect
										x="37.72"
										y="58.657"
										style={{fill: '#999999'}}
										width="5.667"
										height="21.333"
									/>

									<rect
										x="20.386"
										y="79.99"
										style={{fill: '#CCCCCC'}}
										width="11.667"
										height="21.333"
									/>
								</g>
								<rect
									x="375.5"
									y="146.465"
									style={{fill: '#E6E6E6'}}
									width="49"
									height="85"
								/>
								<rect
									x="364.5"
									y="224.465"
									style={{fill: '#E6E6E6'}}
									width="11"
									height="7"
								/>
								<rect
									x="337.852"
									y="146.465"
									style={{fill: '#E6E6E6'}}
									width="37.648"
									height="26.5"
								/>
								<path
									style={{fill: '#E6E6E6'}}
									d="M425.253,156.959h-1.251v-10.494h1.251c2.898,0,5.247,2.349,5.247,5.247l0,0
		C430.5,154.61,428.151,156.959,425.253,156.959z"
								/>
								<path
									style={{fill: '#999999'}}
									d="M337.852,172.966L337.852,172.966c-7.318,0-13.25-5.932-13.25-13.25v0
		c0-7.318,5.932-13.25,13.25-13.25h0c7.318,0,13.25,5.932,13.25,13.25v0C351.102,167.033,345.17,172.966,337.852,172.966z"
								/>
								<path
									style={{fill: '#CCCCCC'}}
									d="M340.79,159.716c0,3.45-2.79,6.25-6.25,6.25h-47.47l-12.78-6.25l12.78-6.25h47.47
		c1.73,0,3.29,0.7,4.42,1.83C340.09,156.425,340.79,157.985,340.79,159.716z"
								/>
								<rect
									x="355.284"
									y="172.965"
									style={{fill: '#999999'}}
									width="20.216"
									height="9.5"
								/>
								<path
									style={{fill: '#B3B3B3'}}
									d="M340.79,159.716c0,3.45-2.79,6.25-6.25,6.25h-47.47l-12.78-6.25H340.79z"
								/>
								<rect
									x="371"
									y="203.465"
									style={{fill: '#CCCCCC'}}
									width="4.5"
									height="21"
								/>
								<rect
									x="360.333"
									y="195.132"
									style={{fill: '#B3B3B3'}}
									width="10.667"
									height="8.333"
								/>
								<rect
									x="39.55"
									y="125.657"
									style={{fill: '#CCCCCC'}}
									width="40.45"
									height="77.809"
								/>
								<g>
									<rect
										x="318.833"
										y="131.966"
										style={{fill: '#999999'}}
										width="49.667"
										height="4.667"
									/>
									<rect
										x="362.833"
										y="125.299"
										style={{fill: '#808080'}}
										width="11.333"
										height="21.333"
									/>
									<rect
										x="368.5"
										y="125.299"
										style={{fill: '#999999'}}
										width="5.667"
										height="21.333"
									/>
									<path
										style={{fill: '#999999'}}
										d="M314.833,126.299h-2c-4.418,0-8,3.582-8,8v0c0,4.418,3.582,8,8,8h2c4.418,0,8-3.582,8-8v0
			C322.833,129.881,319.252,126.299,314.833,126.299z"
									/>
								</g>
								<rect
									x="76.341"
									y="323.465"
									style={{fill: '#999999'}}
									width="312.659"
									height="24"
								/>
								<rect
									x="40.341"
									y="323.465"
									style={{fill: '#808080'}}
									width="56.659"
									height="24"
								/>
								<rect
									x="157"
									y="124.465"
									style={{fill: '#808080'}}
									width="25"
									height="65"
								/>
								<rect
									x="182"
									y="124.465"
									style={{fill: '#999999'}}
									width="34.02"
									height="65"
								/>
								<g>
									<rect
										x="96"
										y="347.465"
										style={{fill: '#B3B3B3'}}
										width="25"
										height="45"
									/>
									<rect
										x="121"
										y="347.465"
										style={{fill: '#CCCCCC'}}
										width="34.02"
										height="45"
									/>
								</g>
								<g>
									<rect
										x="67.641"
										y="392.465"
										style={{fill: '#B3B3B3'}}
										width="49.025"
										height="17.999"
									/>
									<rect
										x="116.666"
										y="392.465"
										style={{fill: '#CCCCCC'}}
										width="66.713"
										height="17.999"
									/>
								</g>
								<g>
									<rect
										x="272.663"
										y="392.465"
										style={{fill: '#B3B3B3'}}
										width="49.025"
										height="17.999"
									/>
									<rect
										x="321.689"
										y="392.465"
										style={{fill: '#CCCCCC'}}
										width="66.713"
										height="17.999"
									/>
								</g>
								<g>
									<rect
										x="301.023"
										y="347.465"
										style={{fill: '#B3B3B3'}}
										width="25"
										height="45"
									/>
									<rect
										x="326.023"
										y="347.465"
										style={{fill: '#CCCCCC'}}
										width="34.02"
										height="45"
									/>
								</g>
								<rect
									x="187"
									y="111.465"
									style={{fill: '#999999'}}
									width="48"
									height="13"
								/>
								<rect
									x="157"
									y="111.465"
									style={{fill: '#808080'}}
									width="48"
									height="13"
								/>
							</g>
						</svg>
					</div>
					<div
						id="earth"
						style={{
							position: 'absolute',
							right: 200,
							bottom: 100,
							transform: `scale(${earthScale})`,
							overflow: 'hidden',
						}}
					>
						<div
							className="inner-earth"
							style={{
								display: 'flex',
								height: '100%',
								transform: `translateX(${earthBg}%)`,
							}}
						>
							<img src={earth} alt="" style={{height: '100%', width: 'auto'}} />
							<img
								src={earth}
								alt=""
								style={{
									height: '100%',
									width: 'auto',
									transform: 'translateX(-1px)',
								}}
							/>
						</div>
					</div>
				</AbsoluteFill>
			</Sequence>
			<Sequence from={570} durationInFrames={Infinity}>
				<AbsoluteFill
					style={{
						backgroundColor: 'var(--yellow)',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '20px',
							flexDirection: 'column',

							opacity: question1Opacity,
							transform: `translateY(${question1Translate}px)`,
						}}
					>
						<svg
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 469.122 469.122"
							xml:space="preserve"
							style={{
								width: 200,
							}}
						>
							<g>
								<path
									style={{fill: '#496A72'}}
									d="M102.43,159.716c0,15.46-12.53,28-28,28c-1.71,0-3.38-0.15-5-0.45c-13.08-2.35-23-13.8-23-27.55
		s9.92-25.2,23-27.55c1.62-0.3,3.29-0.45,5-0.45C89.9,131.716,102.43,144.255,102.43,159.716z"
								/>
								<path
									style={{fill: '#345156'}}
									d="M92.43,159.716c0,13.75-9.92,25.2-23,27.55c-13.08-2.35-23-13.8-23-27.55s9.92-25.2,23-27.55
		C82.51,134.516,92.43,145.966,92.43,159.716z"
								/>
								<rect
									x="355.284"
									y="146.465"
									style={{fill: '#CCCCCC'}}
									width="20.216"
									height="57"
								/>
								<rect
									x="350.346"
									y="249.965"
									style={{fill: '#E6E6E6'}}
									width="79.655"
									height="50"
								/>
								<rect
									x="131.205"
									y="189.465"
									style={{fill: '#CCCCCC'}}
									width="219.141"
									height="134"
								/>
								<g>
									<rect
										x="215.5"
										y="270.465"
										style={{fill: '#738B93'}}
										width="19.5"
										height="45"
									/>
									<rect
										x="210.5"
										y="270.465"
										style={{fill: '#244D54'}}
										width="5"
										height="45"
									/>
									<rect
										x="221.5"
										y="276.465"
										style={{fill: '#244D54'}}
										width="7.5"
										height="33"
									/>
									<polygon
										style={{fill: '#808080'}}
										points="254.12,315.846 249.88,320.086 221.5,291.706 221.5,283.226 		"
									/>
									<circle
										style={{fill: '#EF7954'}}
										cx="252"
										cy="317.965"
										r="7"
									/>
								</g>
								<rect
									x="350.346"
									y="203.465"
									style={{fill: '#999999'}}
									width="91.655"
									height="21"
								/>
								<rect
									x="350.346"
									y="224.465"
									style={{fill: '#CCCCCC'}}
									width="83.988"
									height="15"
								/>
								<rect
									x="350.346"
									y="239.465"
									style={{fill: '#999999'}}
									width="91.655"
									height="10.5"
								/>
								<rect
									x="350.346"
									y="299.965"
									style={{fill: '#999999'}}
									width="91.655"
									height="10.5"
								/>
								<rect
									x="98.341"
									y="189.465"
									style={{fill: '#808080'}}
									width="32.864"
									height="134"
								/>
								<g>
									<rect
										x="52.357"
										y="249.965"
										style={{fill: '#E6E6E6'}}
										width="78.644"
										height="50"
									/>
									<rect
										x="12"
										y="249.965"
										style={{fill: '#B3B3B3'}}
										width="40.356"
										height="50"
									/>
								</g>
								<rect
									x="39.55"
									y="203.465"
									style={{fill: '#999999'}}
									width="91.655"
									height="21"
								/>
								<rect
									x="52.356"
									y="224.465"
									style={{fill: '#CCCCCC'}}
									width="91.655"
									height="15"
								/>
								<rect
									x="39.55"
									y="239.465"
									style={{fill: '#999999'}}
									width="91.655"
									height="10.5"
								/>
								<rect
									x="0"
									y="203.465"
									style={{fill: '#808080'}}
									width="39.55"
									height="21"
								/>
								<rect
									x="0"
									y="125.657"
									style={{fill: '#B3B3B3'}}
									width="39.55"
									height="77.809"
								/>
								<rect
									x="12"
									y="224.465"
									style={{fill: '#B3B3B3'}}
									width="40.356"
									height="15"
								/>
								<rect
									x="0"
									y="239.465"
									style={{fill: '#808080'}}
									width="39.55"
									height="10.5"
								/>
								<rect
									x="39.55"
									y="299.965"
									style={{fill: '#999999'}}
									width="91.655"
									height="10.5"
								/>
								<rect
									x="0"
									y="299.965"
									style={{fill: '#808080'}}
									width="39.55"
									height="10.5"
								/>
								<path
									style={{
										fill: '#496A72',
										transformOrigin: 'center center',
										transformBox: 'fill-box',
									}}
									transform={`rotate(${fastSpin})`}
									d="M335.531,282.201c18.147-18.147,18.147-47.569,0-65.716c-18.147-18.147-47.569-18.147-65.716,0
		s-18.147,47.569,0,65.716C287.962,300.348,317.384,300.348,335.531,282.201z M283.765,273.646l14.245-14.245
		c2.953,1.368,6.374,1.368,9.327,0l14.245,14.245C310.492,282.295,294.854,282.295,283.765,273.646z M326.976,268.251
		l-14.245-14.245c1.368-2.953,1.368-6.374,0-9.327l14.245-14.245C335.625,241.524,335.625,257.162,326.976,268.251z M321.581,225.04
		l-14.245,14.245c-2.953-1.368-6.374-1.368-9.327,0l-14.245-14.245C294.854,216.391,310.492,216.391,321.581,225.04z
		 M278.37,230.435l14.245,14.245c-1.368,2.953-1.368,6.374,0,9.327l-14.245,14.245C269.721,257.162,269.721,241.524,278.37,230.435z
		"
								/>
								<rect
									x="121.667"
									y="189.465"
									style={{fill: '#808080'}}
									width="9.538"
									height="134"
								/>
								<path
									style={{
										fill: '#496A72',
										transformOrigin: 'center center',
										transformBox: 'fill-box',
									}}
									transform={`rotate(${slowSpin})`}
									d="M194.064,226.782c-13.271-13.271-34.788-13.271-48.06,0c-13.271,13.271-13.271,34.788,0,48.06
		s34.788,13.271,48.06,0C207.335,261.57,207.335,240.053,194.064,226.782z M187.807,264.64l-10.418-10.418
		c1.001-2.159,1.001-4.662,0-6.821l10.418-10.418C194.133,245.094,194.133,256.53,187.807,264.64z M183.862,233.038l-10.418,10.418
		c-2.159-1.001-4.662-1.001-6.821,0l-10.418-10.418C164.316,226.713,175.752,226.713,183.862,233.038z M152.261,236.984
		l10.418,10.418c-1.001,2.159-1.001,4.662,0,6.821l-10.418,10.418C145.935,256.53,145.935,245.094,152.261,236.984z
		 M156.206,268.585l10.418-10.418c2.159,1.001,4.662,1.001,6.821,0l10.418,10.418C175.752,274.91,164.316,274.91,156.206,268.585z"
								/>
								<path
									style={{
										fill: '#496A72',
										transformOrigin: 'center center',
										transformBox: 'fill-box',
									}}
									transform={`rotate(${reverseSpin})`}
									d="M457.112,122.718c-16.013-16.013-41.976-16.013-57.989,0c-16.013,16.013-16.013,41.976,0,57.989
		c16.013,16.013,41.976,16.013,57.989,0C473.125,164.694,473.125,138.731,457.112,122.718z M449.562,168.397l-12.57-12.57
		c1.207-2.605,1.207-5.625,0-8.23l12.57-12.57C457.195,144.813,457.195,158.612,449.562,168.397z M444.802,130.267l-12.57,12.57
		c-2.605-1.207-5.625-1.207-8.23,0l-12.57-12.57C421.217,122.635,435.017,122.635,444.802,130.267z M406.672,135.027l12.57,12.57
		c-1.207,2.605-1.207,5.625,0,8.23l-12.57,12.57C399.039,158.612,399.039,144.813,406.672,135.027z M411.432,173.158l12.57-12.57
		c2.605,1.207,5.625,1.207,8.23,0l12.57,12.57C435.017,180.79,421.217,180.79,411.432,173.158z"
								/>
								<g>
									<g>
										<rect
											x="41.455"
											y="101.324"
											style={{fill: '#808080'}}
											width="34.762"
											height="8.111"
										/>
										<rect
											x="10.556"
											y="101.324"
											style={{fill: '#999999'}}
											width="30.899"
											height="8.111"
										/>
										<rect
											x="41.455"
											y="117.546"
											style={{fill: '#808080'}}
											width="34.762"
											height="8.111"
										/>
										<rect
											x="10.556"
											y="117.546"
											style={{fill: '#999999'}}
											width="30.899"
											height="8.111"
										/>
										<rect
											x="43"
											y="109.435"
											style={{fill: '#B3B3B3'}}
											width="28.968"
											height="8.111"
										/>
										<rect
											x="14.032"
											y="109.435"
											style={{fill: '#CCCCCC'}}
											width="28.968"
											height="8.111"
										/>
									</g>
									<g>
										<rect
											x="23.72"
											y="65.324"
											width="69.333"
											height="4.667"
											style={{
												fill: '#999999',
											}}
										/>
										<path
											style={{fill: '#999999'}}
											d="M97.053,59.657h2c4.418,0,8,3.582,8,8v0c0,4.418-3.582,8-8,8h-2c-4.418,0-8-3.582-8-8v0
			C89.053,63.239,92.635,59.657,97.053,59.657z"
										/>
									</g>

									<rect
										x="20.386"
										y="79.99"
										style={{fill: '#999999'}}
										width="46"
										height="21.333"
									/>
									<rect
										x="37.72"
										y="58.657"
										style={{fill: '#808080'}}
										width="11.333"
										height="21.333"
									/>
									<rect
										x="37.72"
										y="58.657"
										style={{fill: '#999999'}}
										width="5.667"
										height="21.333"
									/>

									<rect
										x="20.386"
										y="79.99"
										style={{fill: '#CCCCCC'}}
										width="11.667"
										height="21.333"
									/>
								</g>
								<rect
									x="375.5"
									y="146.465"
									style={{fill: '#E6E6E6'}}
									width="49"
									height="85"
								/>
								<rect
									x="364.5"
									y="224.465"
									style={{fill: '#E6E6E6'}}
									width="11"
									height="7"
								/>
								<rect
									x="337.852"
									y="146.465"
									style={{fill: '#E6E6E6'}}
									width="37.648"
									height="26.5"
								/>
								<path
									style={{fill: '#E6E6E6'}}
									d="M425.253,156.959h-1.251v-10.494h1.251c2.898,0,5.247,2.349,5.247,5.247l0,0
		C430.5,154.61,428.151,156.959,425.253,156.959z"
								/>
								<path
									style={{fill: '#999999'}}
									d="M337.852,172.966L337.852,172.966c-7.318,0-13.25-5.932-13.25-13.25v0
		c0-7.318,5.932-13.25,13.25-13.25h0c7.318,0,13.25,5.932,13.25,13.25v0C351.102,167.033,345.17,172.966,337.852,172.966z"
								/>
								<path
									style={{fill: '#CCCCCC'}}
									d="M340.79,159.716c0,3.45-2.79,6.25-6.25,6.25h-47.47l-12.78-6.25l12.78-6.25h47.47
		c1.73,0,3.29,0.7,4.42,1.83C340.09,156.425,340.79,157.985,340.79,159.716z"
								/>
								<rect
									x="355.284"
									y="172.965"
									style={{fill: '#999999'}}
									width="20.216"
									height="9.5"
								/>
								<path
									style={{fill: '#B3B3B3'}}
									d="M340.79,159.716c0,3.45-2.79,6.25-6.25,6.25h-47.47l-12.78-6.25H340.79z"
								/>
								<rect
									x="371"
									y="203.465"
									style={{fill: '#CCCCCC'}}
									width="4.5"
									height="21"
								/>
								<rect
									x="360.333"
									y="195.132"
									style={{fill: '#B3B3B3'}}
									width="10.667"
									height="8.333"
								/>
								<rect
									x="39.55"
									y="125.657"
									style={{fill: '#CCCCCC'}}
									width="40.45"
									height="77.809"
								/>
								<g>
									<rect
										x="318.833"
										y="131.966"
										style={{fill: '#999999'}}
										width="49.667"
										height="4.667"
									/>
									<rect
										x="362.833"
										y="125.299"
										style={{fill: '#808080'}}
										width="11.333"
										height="21.333"
									/>
									<rect
										x="368.5"
										y="125.299"
										style={{fill: '#999999'}}
										width="5.667"
										height="21.333"
									/>
									<path
										style={{fill: '#999999'}}
										d="M314.833,126.299h-2c-4.418,0-8,3.582-8,8v0c0,4.418,3.582,8,8,8h2c4.418,0,8-3.582,8-8v0
			C322.833,129.881,319.252,126.299,314.833,126.299z"
									/>
								</g>
								<rect
									x="76.341"
									y="323.465"
									style={{fill: '#999999'}}
									width="312.659"
									height="24"
								/>
								<rect
									x="40.341"
									y="323.465"
									style={{fill: '#808080'}}
									width="56.659"
									height="24"
								/>
								<rect
									x="157"
									y="124.465"
									style={{fill: '#808080'}}
									width="25"
									height="65"
								/>
								<rect
									x="182"
									y="124.465"
									style={{fill: '#999999'}}
									width="34.02"
									height="65"
								/>
								<g>
									<rect
										x="96"
										y="347.465"
										style={{fill: '#B3B3B3'}}
										width="25"
										height="45"
									/>
									<rect
										x="121"
										y="347.465"
										style={{fill: '#CCCCCC'}}
										width="34.02"
										height="45"
									/>
								</g>
								<g>
									<rect
										x="67.641"
										y="392.465"
										style={{fill: '#B3B3B3'}}
										width="49.025"
										height="17.999"
									/>
									<rect
										x="116.666"
										y="392.465"
										style={{fill: '#CCCCCC'}}
										width="66.713"
										height="17.999"
									/>
								</g>
								<g>
									<rect
										x="272.663"
										y="392.465"
										style={{fill: '#B3B3B3'}}
										width="49.025"
										height="17.999"
									/>
									<rect
										x="321.689"
										y="392.465"
										style={{fill: '#CCCCCC'}}
										width="66.713"
										height="17.999"
									/>
								</g>
								<g>
									<rect
										x="301.023"
										y="347.465"
										style={{fill: '#B3B3B3'}}
										width="25"
										height="45"
									/>
									<rect
										x="326.023"
										y="347.465"
										style={{fill: '#CCCCCC'}}
										width="34.02"
										height="45"
									/>
								</g>
								<rect
									x="187"
									y="111.465"
									style={{fill: '#999999'}}
									width="48"
									height="13"
								/>
								<rect
									x="157"
									y="111.465"
									style={{fill: '#808080'}}
									width="48"
									height="13"
								/>
							</g>
						</svg>
						<AltTitle
							style={{
								width: '80%',
								fontSize: '65px',
							}}
						>
							Would the Eudaimonia Machine promote well-being, happiness, and
							flourishing in your life?
						</AltTitle>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column',
							gap: '20px',
							opacity: question2Opacity,
							transform: `translateY(${question2Translate}px)`,
						}}
					>
						<div style={{position: 'relative'}}>
							<svg
								fill="#000000"
								viewBox="0 -3.19 54.13 54.13"
								id="Layer_1"
								data-name="Layer 1"
								xmlns="http://www.w3.org/2000/svg"
								style={{width: 200}}
							>
								<path
									d="M59.77,37.11l-.41-1c1.4-3.17,1.31-3.27,1-3.54l-1.79-1.75-.18-.15h-.21c-.11,0-.44,0-3.16,1.23l-1-.4c-1.3-3.21-1.43-3.21-1.81-3.21H49.72c-.38,0-.52,0-1.73,3.22l-1,.4a17.37,17.37,0,0,0-3.21-1.17h-.24l-1.93,1.89c-.29.28-.39.37,1.09,3.49l-.41,1C39,38.4,39,38.52,39,38.91v2.48c0,.39,0,.52,3.29,1.7l.41,1c-1.4,3.17-1.31,3.26-1,3.54l1.8,1.75.17.15h.21c.11,0,.43,0,3.16-1.24l1,.41c1.3,3.21,1.43,3.21,1.81,3.21h2.53c.38,0,.52,0,1.73-3.22l1-.41a17,17,0,0,0,3.2,1.18h.24l1.95-1.9c.27-.28.37-.38-1.11-3.49l.41-1c3.29-1.27,3.29-1.41,3.29-1.79V38.81C63.07,38.42,63.07,38.28,59.77,37.11ZM51,44.22a4.12,4.12,0,1,1,4.2-4.12A4.16,4.16,0,0,1,51,44.22Z"
									transform={`translate(-8.93 -4.12) rotate(${fastReverse})`}
									style={{
										fill: '#496A72',
										transformOrigin: 'center center',
										transformBox: 'fill-box',
									}}
								/>
								<path
									d="M36,22.79l-.53-1.27c1.83-4.14,1.71-4.26,1.35-4.62l-2.34-2.29-.23-.19H34c-.14,0-.57,0-4.13,1.61l-1.31-.53c-1.69-4.19-1.86-4.19-2.36-4.19h-3.3c-.49,0-.68,0-2.25,4.21l-1.31.53a21.5,21.5,0,0,0-4.19-1.53h-.31L12.33,17c-.38.36-.51.49,1.42,4.57l-.53,1.26c-4.29,1.66-4.29,1.82-4.29,2.32v3.24c0,.51,0,.69,4.3,2.23l.54,1.26c-1.83,4.13-1.71,4.26-1.36,4.61l2.34,2.29L15,39h.27c.14,0,.56,0,4.12-1.61l1.31.53c1.69,4.19,1.86,4.19,2.36,4.19h3.3c.51,0,.69,0,2.26-4.21l1.31-.53a21.5,21.5,0,0,0,4.19,1.53h.31L37,36.38c.36-.36.48-.49-1.44-4.55l.53-1.26c4.29-1.66,4.29-1.83,4.29-2.33V25C40.34,24.5,40.34,24.32,36,22.79ZM24.64,32.08a5.39,5.39,0,1,1,5.48-5.39A5.46,5.46,0,0,1,24.64,32.08Z"
									transform={`translate(-8.93 -4.12) rotate(${fastSpin})`}
									style={{
										fill: '#496A72',
										transformOrigin: 'center center',
										transformBox: 'fill-box',
									}}
								/>
								<path
									d="M58,11.62l-.35-.83c1.2-2.71,1.12-2.79.89-3L57,6.28l-.15-.13h-.18A9.91,9.91,0,0,0,54,7.2l-.86-.34c-1.1-2.74-1.22-2.74-1.54-2.74H49.47c-.33,0-.45,0-1.48,2.75l-.85.34a14.14,14.14,0,0,0-2.74-1h-.2L42.56,7.83c-.25.24-.34.32.92,3l-.34.83c-2.8,1.08-2.8,1.18-2.8,1.51v2.12c0,.33,0,.45,2.8,1.45l.35.82c-1.19,2.71-1.11,2.79-.88,3l1.53,1.49.15.14h.18a10,10,0,0,0,2.69-1.06l.85.35c1.11,2.73,1.22,2.73,1.55,2.73h2.15c.33,0,.45,0,1.48-2.74l.85-.35a14.89,14.89,0,0,0,2.73,1H57l1.66-1.62c.23-.23.31-.32-.94-3L58,16.7c2.8-1.09,2.8-1.2,2.8-1.52V13.07C60.84,12.73,60.84,12.62,58,11.62Zm-7.44,6.06a3.52,3.52,0,1,1,3.58-3.51A3.56,3.56,0,0,1,50.59,17.68Z"
									transform={`translate(-8.93 -4.12) rotate(${fastReverse})`}
									style={{
										fill: '#496A72',
										transformOrigin: 'center center',
										transformBox: 'fill-box',
									}}
								/>
							</svg>
							<div
								style={{
									fontSize: '50px',
									position: 'absolute',
									top: '64px',
									left: '34px',
									transform: `rotate(${fastSpin}deg)`,
									transformOrigin: 'center center',
								}}
							>
								😊
							</div>
							<div
								style={{
									fontSize: '37px',
									position: 'absolute',
									top: '24px',
									right: '28px',
									transform: `rotate(${fastReverse}deg)`,
									transformOrigin: 'center center',
								}}
							>
								😊
							</div>
							<div
								style={{
									fontSize: '41px',
									position: 'absolute',
									top: '118px',
									right: '24px',
									transform: `rotate(${fastReverse}deg)`,
									transformOrigin: 'center center',
								}}
							>
								😊
							</div>
						</div>
						<AltTitle
							style={{
								width: '80%',
								fontSize: '65px',
							}}
						>
							Do you have your own personal Eudaimonia Machine that allows you
							to perform your best&nbsp;work?
						</AltTitle>
					</div>
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
