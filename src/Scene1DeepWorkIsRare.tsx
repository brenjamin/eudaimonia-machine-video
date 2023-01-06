import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';
import deepwork from './img/deep-work.jpeg';
import calnewport from './img/cal-newport.png';
import styled from 'styled-components';
import {Animation} from 'remotion-animation';

const BOOK_WIDTH = 500;
const CAL_HEIGHT = 1200;

export const Scene1DeepWorkIsRare: React.FC = () => {
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const imageProgress = spring({frame, fps, config: {damping: 100}});
	const bookAnimation = interpolate(
		imageProgress,
		[0, 1],
		[-BOOK_WIDTH - 100, width / 12]
	);
	const calAnimation = interpolate(frame, [60, 75], [CAL_HEIGHT, 100], {
		extrapolateRight: 'clamp',
	});

	const title1Animation = interpolate(frame, [135, 150], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const title2Animation = interpolate(frame, [180, 195], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const title3Animation = interpolate(frame, [260, 275], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const bgFilter = interpolate(frame, [120, 130], [0, 15], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const overlayOpacity = interpolate(frame, [120, 130], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const slideProgress = interpolate(
		frame,
		[0, 350, 351, 370],
		[-100, -100, -100, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	const Title = styled.div`
		font-family: var(--sans);
		font-weight: 800;
		font-size: 80px;
	`;

	const AltTitle = styled.div`
		font-family: var(--sans);
		font-weight: 600;
		font-size: 75px;
		text-align: center;
	`;

	return (
		<>
			<AbsoluteFill
				style={{backgroundColor: 'var(--blue)', filter: `blur(${bgFilter}px)`}}
			>
				<div
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						position: 'relative',
						transform: `translateX(${bookAnimation}px)`,
					}}
				>
					<img
						src={deepwork}
						style={{
							width: BOOK_WIDTH,
							height: 'auto',
							boxShadow: '0 0 10px rgba(0,0,0,.5)',
							border: '.5px solid black',
							filter: 'saturate(125%)',
						}}
					/>
				</div>
				<div
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						alignItems: 'flex-end',
						justifyContent: 'flex-end',
						position: 'absolute',
						top: 0,
						left: 0,
						transform: `translateY(${calAnimation}px)`,
					}}
				>
					<img
						src={calnewport}
						style={{
							height: CAL_HEIGHT,
							width: 'auto',
						}}
					/>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					opacity: overlayOpacity,
					backgroundColor: 'rgba(252,245,95, .87)',
				}}
			>
				<div
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						position: 'absolute',
						top: '50%',
						transform: 'translateY(-50%)',
						textAlign: 'center',
					}}
				>
					<Title style={{clipPath: `inset(0 ${title1Animation}% 0 0)`}}>
						💼 Professional activity
					</Title>
					<div
						style={{
							position: 'relative',
							padding: '6px 20px',
							overflow: 'hidden',
						}}
					>
						<Title style={{clipPath: `inset(0 ${title2Animation}% 0 0)`}}>
							🔎 Performed in a state of
							distraction&#8209;free&nbsp;concentration
						</Title>
					</div>
					<div
						style={{
							position: 'relative',
						}}
					>
						<Title style={{clipPath: `inset(0 ${title3Animation}% 0 0)`}}>
							🧠 That pushes your cognitive capabilities
							to&nbsp;their&nbsp;limit
						</Title>
					</div>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--blue)',
					transform: `translateY(${slideProgress}%)`,
				}}
			>
				<Sequence
					from={410}
					durationInFrames={Infinity}
					style={{
						position: 'relative',
						height: '100%',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						gap: '5rem',
						alignItems: 'center',
					}}
				>
					<div style={{width: '28%'}}>
						<Animation
							duration={4}
							f0={{opacity: 0, transform: 'scale(1)'}}
							f5={{opacity: 0, transform: 'scale(1)'}}
							f10={{opacity: 0.5, transform: 'scale(1.1)'}}
							f15={{opacity: 1, transform: 'scale(1)'}}
						>
							<AltTitle>
								<span style={{fontSize: '180px'}}>🌟</span>
								<br />
								Rare
							</AltTitle>
						</Animation>
					</div>
					<div style={{width: '28%'}}>
						<Animation
							duration={4}
							f0={{opacity: 0, transform: 'scale(1)'}}
							f30={{opacity: 0, transform: 'scale(1)'}}
							f35={{opacity: 0.5, transform: 'scale(1.1)'}}
							f40={{opacity: 1, transform: 'scale(1)'}}
						>
							<AltTitle>
								<span style={{fontSize: '180px'}}>💰</span>
								<br />
								Valuable
							</AltTitle>
						</Animation>
					</div>
					<div style={{width: '28%'}}>
						<Animation
							duration={4}
							f0={{opacity: 0, transform: 'scale(1)'}}
							f70={{opacity: 0, transform: 'scale(1)'}}
							f75={{opacity: 0.5, transform: 'scale(1.1)'}}
							f80={{opacity: 1, transform: 'scale(1)'}}
						>
							<AltTitle>
								<span style={{fontSize: '180px'}}>😊</span>
								<br />
								Life-Changing
							</AltTitle>
						</Animation>
					</div>
				</Sequence>
			</AbsoluteFill>
		</>
	);
};
