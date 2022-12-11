import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

export const Scene2DeepWorkIsHard: React.FC = () => {
	const frame = useCurrentFrame();

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 300px;
		text-align: center;
	`;

	const opacity1 = interpolate(frame, [10, 11], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity2 = interpolate(frame, [20, 21], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity3 = interpolate(frame, [30, 31], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity4 = interpolate(frame, [40, 41], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity5 = interpolate(frame, [50, 51], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill style={{backgroundColor: 'var(--yellow)'}}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						position: 'absolute',
						top: '50%',
						transform: `translateY(-50%)`,
						width: '100%',
						padding: '150px',
					}}
				>
					<div>
						<Title style={{opacity: opacity1}}>
							Deep
							<br />
						</Title>
						<Title style={{opacity: opacity2}}>Work</Title>
					</div>

					<Title style={{fontSize: '400px', opacity: opacity3}}>=</Title>
					<div>
						<Title style={{opacity: opacity4}}>
							Really
							<br />
						</Title>
						<Title style={{opacity: opacity5}}>Hard</Title>
					</div>
				</div>
			</AbsoluteFill>
		</>
	);
};
