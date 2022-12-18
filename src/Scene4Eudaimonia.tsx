import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import aristotle from './img/aristotle.png';

const Title = styled.div`
	font-family: var(--sans);
	text-align: center;
	font-size: 120px;
	font-weight: 600;
`;

const BlockTitle = styled.div`
	font-family: var(--block);
	font-size: 250px;
	text-align: center;
	font-weight: bold;
`;

export const Scene4Eudaimonia: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	const textSlideUp = interpolate(frame, [200, 215], [0, -height / 4.5], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const firstFrameSlideUp = interpolate(frame, [345, 360], [0, -100], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const secondFrameSlideUp = interpolate(frame, [345, 360], [100, 0], {
		extrapolateRight: 'clamp',
	});

	const titleOpacity = interpolate(frame, [30, 40], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const titleOpacity2 = interpolate(frame, [80, 90], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const opacityProgress = interpolate(frame, [225, 235], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const goodOpacity1 = interpolate(frame, [435, 436], [0, 1], {
		extrapolateLeft: 'clamp',
	});
	const goodOpacity2 = interpolate(frame, [444, 445], [0, 1], {
		extrapolateLeft: 'clamp',
	});
	const goodOpacity3 = interpolate(frame, [453, 454], [0, 1], {
		extrapolateLeft: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: '#D6EAF8',
					transform: `translateY(${firstFrameSlideUp}%)`,
				}}
			>
				<div
					style={{
						height: '100%',
						width: '100%',
						padding: '320px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						transform: `translateY(${textSlideUp}px)`,
					}}
				>
					<Title style={{opacity: titleOpacity}}>
						<span style={{fontSize: '130px'}}>εὐ</span>
						<br />
						<span style={{fontWeight: '500'}}>
							<em>good</em>
						</span>
					</Title>
					<Title style={{opacity: titleOpacity2}}>+</Title>
					<Title style={{opacity: titleOpacity2}}>
						<span style={{fontSize: '130px'}}>δαιμονία</span>
						<br />
						<span style={{fontWeight: '500'}}>
							<em>spirit</em>
						</span>
					</Title>
				</div>
				<div
					style={{
						height: '50%',
						width: '100%',
						padding: '200px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						position: 'absolute',
						bottom: height / 12,
						opacity: opacityProgress,
					}}
				>
					<Title style={{fontSize: '100px'}}>
						<span style={{fontSize: '200px'}}>😊</span>
						<br />
						"a combination of well-being, happiness and flourishing"
					</Title>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					transform: `translateY(${secondFrameSlideUp}%)`,
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
					<BlockTitle style={{paddingRight: width / 9}}>
						<span style={{opacity: goodOpacity1}}>Highest</span>
						<br />
						<span style={{opacity: goodOpacity2}}>Human</span>
						<br />
						<span style={{opacity: goodOpacity3}}>Good</span>
					</BlockTitle>
				</div>
			</AbsoluteFill>
		</>
	);
};
