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
import gallery from './img/gallery.jpg';

export const Scene9Gallery: React.FC = () => {
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
		[10, 30, 100, 120],
		[1, 1.5, 1.5, 5],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const translateXProgress = interpolate(frame, [10, 30], [0, 600], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const translateYProgress = interpolate(
		frame,
		[10, 30, 100, 120],
		[0, 30, 30, -60],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const imageSlide = interpolate(frame, [0, 360], [width / 6, -width / 6]);
	const imageOpacity = interpolate(frame, [100, 120], [0, 1], {
		extrapolateLeft: 'clamp',
	});

	const emojiProgress = interpolate(frame, [300, 320], [-100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill style={{backgroundColor: 'var(--yellow)'}}>
				<AbsoluteFill style={{opacity: imageOpacity, zIndex: '10'}}>
					<AbsoluteFill
						style={{
							transform: `scale(1.5) translateX(${imageSlide}px)`,
						}}
					>
						<img src={gallery} />
					</AbsoluteFill>
					<div
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
							paddingRight: width / 24,
							paddingTop: height / 24,
							fontSize: '150px',
							transform: `translateY(${emojiProgress}%)`,
							textAlign: 'center',
						}}
					>
						😅
					</div>
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
