import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import openoffice from './img/open-office.jpg';
import styled from 'styled-components';
import machine from './img/eudaimonia-machine.png';
import cafe from './img/cafe.jpg';

export const Scene10Salon: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
		text-align: center;
	`;

	const scaleProgress = interpolate(
		frame,
		[0, 90, 100, 120],
		[1.5, 1.5, 1.5, 5],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const translateXProgress = interpolate(
		frame,
		[0, 10, 15, 35],
		[600, 600, 600, 300],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const translateYProgress = interpolate(
		frame,
		[0, 90, 100, 120],
		[30, 30, 30, -60],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const imageSlide = interpolate(frame, [0, 360], [width / 6, -width / 6]);
	const imageOpacity = interpolate(frame, [100, 120], [0, 1], {
		extrapolateLeft: 'clamp',
	});

	const emojiProgress = interpolate(frame, [180, 200], [-100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill style={{backgroundColor: 'var(--yellow)'}}>
				<AbsoluteFill style={{opacity: imageOpacity, zIndex: '10'}}>
					<AbsoluteFill
						style={{
							transform: `scale(1.7) translate(${imageSlide}px, 0)`,
						}}
					>
						<img src={cafe} />
					</AbsoluteFill>
				</AbsoluteFill>

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
						transform: `scale(${scaleProgress}) translate(${translateXProgress}px, ${translateYProgress}px)`,
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
			</AbsoluteFill>
		</>
	);
};
