import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';
import styled from 'styled-components';
import {transform} from 'typescript';
import machine from './img/eudaimonia-machine.png';

export const Scene8MachinePurpose: React.FC = () => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();
	const Title = styled.div`
		font-family: var(--sans);
		text-align: center;
		font-size: 75px;
		width: 33%;
		font-weight: 500;
	`;

	const BlockTitle = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
		text-align: center;
	`;

	const opacity1 = interpolate(frame, [165, 170], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity2 = interpolate(frame, [195, 200], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity3 = interpolate(frame, [220, 225], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity4 = interpolate(frame, [295, 305], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const transformBulb = interpolate(
		frame,
		[165, 170, 175, 180],
		[1, 1.5, 1.5, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const filterBulb = interpolate(frame, [165, 170, 175, 180], [1, 10, 10, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const transformBubble = interpolate(frame, [195, 215], [-60, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.bounce,
	});

	const transformPaper = interpolate(frame, [220, 230], [20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const transformArrow = interpolate(frame, [295, 315], [0, 40], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const diagramSlide = interpolate(frame, [110, 130], [0, -100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.back(),
	});

	const purposeSlide = interpolate(frame, [120, 140], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.back(),
	});

	const mainOpacity = interpolate(frame, [0, 15], [0, 1]);

	return (
		<>
			<AbsoluteFill
				style={{
					background: 'var(--yellow)',
					opacity: mainOpacity,
				}}
			>
				<AbsoluteFill>
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
							top: '40px',
							transform: `translateX(${diagramSlide}%)`,
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
							<BlockTitle style={{transform: 'translateX(0px)'}}>
								Gallery
							</BlockTitle>
							<BlockTitle style={{transform: 'translateX(25px)'}}>
								Salon
							</BlockTitle>
							<BlockTitle style={{transform: 'translateX(40px)'}}>
								Library
							</BlockTitle>
							<BlockTitle style={{transform: 'translateX(15px)'}}>
								Office
								<br />
								Space
							</BlockTitle>
							<BlockTitle style={{transform: 'translateX(15px)'}}>
								Deep Work
								<br />
								Chambers
							</BlockTitle>
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
				<Sequence from={110} durationInFrames={Infinity}>
					<AbsoluteFill
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							flexWrap: 'wrap',
							transform: `translateX(${purposeSlide}%)`,
						}}
					>
						<Title style={{opacity: opacity1}}>
							<span
								style={{
									transform: `scale(${transformBulb})`,
									filter: `saturate(${filterBulb})`,
									display: 'inline-block',
									fontSize: '150px',
								}}
							>
								💡
							</span>
							<br />
							Get Inspired
						</Title>
						<Title style={{opacity: opacity2}}>
							<span
								style={{
									display: 'inline-block',
									fontSize: '150px',
									transform: `translate(${transformBubble}px, ${transformBubble}px)`,
								}}
							>
								💬
							</span>
							<br />
							Socialize
						</Title>
						<Title
							style={{
								opacity: opacity3,
								transform: `translateY(${transformPaper}px)`,
							}}
						>
							<span style={{display: 'inline-block', fontSize: '150px'}}>
								📝
							</span>
							<br />
							Shallow Work
						</Title>
						<Title
							style={{
								opacity: opacity4,
								transform: `translateY(${transformArrow}px)`,
								fontWeight: 700,
								fontFamily: 'var(--block)',
								fontSize: '100px',
							}}
						>
							<span style={{display: 'inline-block', fontSize: '150px'}}>
								🎧
							</span>
							<br />
							Deep Work
						</Title>
						<AbsoluteFill
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								opacity: opacity4,
								transform: `translateY(${transformArrow}px)`,
							}}
						>
							<Title
								style={{
									fontSize: '150px',
									transform: 'translateY(15px)',
								}}
							>
								⬇️
							</Title>
						</AbsoluteFill>
					</AbsoluteFill>
				</Sequence>
			</AbsoluteFill>
		</>
	);
};
