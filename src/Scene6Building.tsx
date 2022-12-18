import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';
import machine from './img/eudaimonia-machine.png';
import styled from 'styled-components';
import {Animation} from 'remotion-animation';

export const Scene6Building: React.FC = () => {
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const slowSpin = interpolate(frame, [0, 180], [0, 360]);
	const fastSpin = interpolate(frame, [0, 90], [0, 360]);
	const reverseSpin = interpolate(frame, [0, 45], [0, -360]);

	const machineSlide = interpolate(frame, [90, 110], [0, -100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.back(),
	});

	const buildingSlide = interpolate(frame, [100, 120], [0, -100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.elastic(),
	});

	const secondBuildingSlide = interpolate(frame, [190, 210], [0, -150], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.back(),
	});

	const diagramSlide = interpolate(frame, [220, 240], [0, -100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.elastic(),
	});

	const secondDiagramSlide = interpolate(frame, [450, 480], [0, 100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.back(),
	});

	const birdOpacity = interpolate(frame, [70, 71, 190, 210], [0, 1, 1, 0]);

	const normalizedBirdStep = (offset: number = 0) => {
		const birdStep = Math.floor((frame + offset) / (fps / 10));
		return (birdStep - Math.floor(frame / fps) * 10) * 90;
	};

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
		text-align: center;
	`;

	return (
		<>
			<AbsoluteFill style={{backgroundColor: 'var(--yellow)'}}>
				<AbsoluteFill
					style={{
						top: 'auto',
						bottom: '100%',
						transform: `translateY(${secondDiagramSlide}%)`,
						justifyContent: 'center',
						padding: '200px',
					}}
				>
					<Title style={{fontSize: '120px'}}>
						“The lack of circulation is critical because it doesn’t allow you to
						bypass any of the spaces as you get deeper into the machine.”
					</Title>
				</AbsoluteFill>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
						position: 'absolute',
						width: '100%',
						left: '100%',
						transform: `translateX(${buildingSlide}%)`,
					}}
				>
					<div>
						<Sequence from={110} durationInFrames={3 * fps}>
							<Animation
								duration={16}
								style={{
									position: 'absolute',
									top: '20%',
									left: '0px',
									animationTimingFunction: 'linear',
									transform: 'scale(0) translateX(-10vw)',
									animationIterationCount: 'infinite',
									opacity: birdOpacity,
								}}
								f0={{transform: 'scale(0.3) translateX(-10vw)'}}
								f10={{
									transform: 'translateY(2vh) translateX(10vw) scale(0.4)',
								}}
								f20={{
									transform: 'translateY(0vh) translateX(30vw) scale(0.5)',
								}}
								f30={{
									transform: 'translateY(4vh) translateX(50vw) scale(0.6)',
								}}
								f40={{
									transform: 'translateY(2vh) translateX(70vw) scale(0.6)',
								}}
								f50={{
									transform: 'translateY(0vh) translateX(90vw) scale(0.6)',
								}}
								f60={{
									transform: 'translateY(2vh) translateX(110vw) scale(0.6)',
								}}
								f100={{
									transform: 'translateY(0vh) translateX(110vw) scale(0.6)',
								}}
							>
								<div
									className="bird"
									style={{
										backgroundPosition: `-${normalizedBirdStep()}px 0`,
									}}
								></div>
							</Animation>
						</Sequence>
						<Sequence from={124} durationInFrames={3 * fps}>
							<Animation
								duration={16}
								style={{
									position: 'absolute',
									top: '20%',
									left: '0px',
									animationTimingFunction: 'linear',
									transform: 'scale(0.3) translateX(-10vw)',
									opacity: birdOpacity,
								}}
								f0={{transform: 'scale(0.3) translateX(-10vw)'}}
								f10={{
									transform: 'translateY(2vh) translateX(10vw) scale(0.4)',
								}}
								f20={{
									transform: 'translateY(0vh) translateX(30vw) scale(0.5)',
								}}
								f30={{
									transform: 'translateY(4vh) translateX(50vw) scale(0.6)',
								}}
								f40={{
									transform: 'translateY(2vh) translateX(70vw) scale(0.6)',
								}}
								f50={{
									transform: 'translateY(0vh) translateX(90vw) scale(0.6)',
								}}
								f60={{
									transform: 'translateY(2vh) translateX(110vw) scale(0.6)',
								}}
								f70={{
									transform: 'translateY(2vh) translateX(120vw) scale(0.6)',
								}}
								f100={{
									transform: 'translateY(0vh) translateX(120vw) scale(0.6)',
								}}
							>
								<div
									className="bird"
									style={{
										backgroundPosition: `-${normalizedBirdStep(5)}px 0`,
									}}
								></div>
							</Animation>
						</Sequence>
					</div>
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 512 512"
						xml:space="preserve"
						style={{
							enableBackground: 'new 0 0 512 512',
							width: '50%',
							transform: `translateX(${secondBuildingSlide}%)`,
						}}
					>
						<g>
							<polygon
								style={{fill: '#C8DA2E'}}
								points="52.245,386.612 52.245,250.775 130.612,250.775 146.286,250.775 146.286,386.612 	"
							/>
							<polygon
								style={{fill: '#C8DA2E'}}
								points="381.388,386.612 365.714,386.612 365.714,250.775 381.388,250.775 459.755,250.775 
		459.755,386.612 	"
							/>
						</g>
						<polygon
							style={{fill: '#B7B8B9'}}
							points="407.51,31.347 407.51,73.143 381.388,73.143 130.612,73.143 104.49,73.143 104.49,31.347 "
						/>
						<polygon
							style={{fill: '#F2F2F2'}}
							points="256,386.612 308.245,386.612 308.245,480.653 203.755,480.653 203.755,386.612 "
						/>
						<polygon
							style={{fill: '#E6E6E6'}}
							points="365.714,250.775 381.388,250.775 381.388,73.143 130.612,73.143 130.612,250.775 
	146.286,250.775 146.286,386.612 130.612,386.612 130.612,480.653 203.755,480.653 203.755,386.612 308.245,386.612 
	308.245,480.653 381.388,480.653 381.388,386.612 365.714,386.612 "
						/>
						<path
							d="M420.571,472.816v-78.367h47.02v-151.51h-78.367V80.98h26.122V23.51H96.653V80.98h26.122v161.959H44.408v151.51h47.02
	v78.367H0v15.673h512v-15.673H420.571z M404.898,472.816h-15.673v-78.367h15.673V472.816z M451.918,378.775h-31.347v-49.633h-15.673
	v49.633h-31.347V258.612h78.367V378.775z M112.327,39.184h287.347v26.122H112.327V39.184z M138.449,80.98h235.102v161.959h-15.673
	v151.51h15.673v78.367h-57.469v-78.367h13.061v-15.673H182.857v15.673h13.061v78.367h-57.469v-78.367h15.673v-151.51h-15.673V80.98z
	 M248.163,394.449v54.857h15.673v-54.857h36.571v78.367h-88.816v-78.367H248.163z M60.082,378.775V258.612h78.367v120.163h-31.347
	v-49.633H91.429v49.633H60.082z M107.102,394.449h15.673v78.367h-15.673V394.449z"
						/>
						<rect x="167.184" y="112.327" width="177.633" height="15.673" />
						<rect x="167.184" y="154.122" width="177.633" height="15.673" />
						<rect x="167.184" y="195.918" width="177.633" height="15.673" />
						<rect x="167.184" y="237.714" width="177.633" height="15.673" />
						<rect x="167.184" y="279.51" width="177.633" height="15.673" />
						<rect x="167.184" y="321.306" width="177.633" height="15.673" />
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
						<g></g>
					</svg>
				</div>
				<div
					style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '0px',
						left: '100%',
						top: ' 40px',
						transform: `translateX(${diagramSlide}%) translateY(${secondDiagramSlide}%)`,
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-evenly',
							width: '85%',
							gap: '48px',
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
				<div
					style={{height: '100%', transform: `translateX(${machineSlide}%)`}}
				>
					<div
						style={{
							height: '100%',
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
								height: height,
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
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
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
						</svg>
					</div>
				</div>
			</AbsoluteFill>
		</>
	);
};
