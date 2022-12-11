import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import deepwork from './img/deep-work.jpeg';
import calnewport from './img/cal-newport.png';
import styled from 'styled-components';

const BOOK_WIDTH = 400;
const CAL_HEIGHT = 1000;

export const Scene1DeepWorkIsRare: React.FC = () => {
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const imageProgress = spring({frame, fps, config: {damping: 100}});
	const bookAnimation = interpolate(
		imageProgress,
		[0, 1],
		[-BOOK_WIDTH - 100, width / 12]
	);
	const calAnimation = interpolate(frame, [30, 45], [CAL_HEIGHT, 100], {
		extrapolateRight: 'clamp',
	});

	const title1Animation = interpolate(frame, [60, 75], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const title2Animation = interpolate(frame, [80, 95], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const title3Animation = interpolate(frame, [100, 115], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const Title = styled.div`
		font-family: var(--sans);
		font-weight: 800;
		font-size: 70px;
		padding: 6px 20px;
		background-color: #ffdb58;
	`;

	const TitleMask = styled.div`
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--blue);
		transform-origin: right;
	`;

	return (
		<>
			<AbsoluteFill style={{backgroundColor: 'var(--blue)'}}>
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
				<div
					style={{
						height: height / 2.5,
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-between',
						position: 'absolute',
						top: '50%',
						transform: 'translateY(-75%)',
					}}
				>
					<div
						style={{
							position: 'relative',
						}}
					>
						<Title>🌟 Rare</Title>
						<TitleMask
							style={{
								transform: `scaleX(${title1Animation})`,
							}}
						></TitleMask>
					</div>
					<div
						style={{
							position: 'relative',
						}}
					>
						<Title>💰 Valuable</Title>
						<TitleMask
							style={{
								transform: `scaleX(${title2Animation})`,
							}}
						></TitleMask>
					</div>
					<div
						style={{
							position: 'relative',
						}}
					>
						<Title>😊 Life-Changing</Title>
						<TitleMask
							style={{
								transform: `scaleX(${title3Animation})`,
							}}
						></TitleMask>
					</div>
				</div>
			</AbsoluteFill>
		</>
	);
};
