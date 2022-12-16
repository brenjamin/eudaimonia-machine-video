import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {transform} from 'typescript';

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

	const opacity1 = interpolate(frame, [10, 20], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity2 = interpolate(frame, [40, 50], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity3 = interpolate(frame, [60, 70], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity4 = interpolate(frame, [80, 90], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const transformBulb = interpolate(frame, [10, 20, 25, 30], [1, 1.5, 1.5, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const filterBulb = interpolate(frame, [10, 15, 20, 25], [1, 10, 10, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const transformBubble = interpolate(frame, [40, 50], [-60, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.bounce,
	});

	const transformPaper = interpolate(frame, [60, 70], [20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const transformArrow = interpolate(frame, [80, 100], [0, 40], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					flexWrap: 'wrap',
					background: 'var(--yellow)',
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
					<span style={{display: 'inline-block', fontSize: '150px'}}>📝</span>
					<br />
					Shallow Work
				</Title>
				<Title
					style={{
						opacity: opacity4,
						transform: `translateY(${transformArrow}px)`,
					}}
				>
					<span style={{display: 'inline-block', fontSize: '150px'}}>🎧</span>
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
		</>
	);
};
