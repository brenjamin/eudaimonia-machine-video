import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';
import styled from 'styled-components';
import parthenon from './img/parthenon.png';
import socrates from './img/socrates.png';
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

	const textSlideUp = interpolate(frame, [325, 345], [0, -height / 4.5], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const firstFrameSlideUp = interpolate(frame, [470, 490], [0, -100], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const secondFrameSlideUp = interpolate(frame, [470, 490], [100, 0], {
		extrapolateRight: 'clamp',
	});

	const titleOpacity = interpolate(frame, [155, 165], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const titleOpacity2 = interpolate(frame, [205, 215], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const opacityProgress = interpolate(frame, [350, 360], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const goodOpacity1 = interpolate(frame, [557, 558], [0, 1], {
		extrapolateLeft: 'clamp',
	});
	const goodOpacity2 = interpolate(frame, [567, 568], [0, 1], {
		extrapolateLeft: 'clamp',
	});
	const goodOpacity3 = interpolate(frame, [576, 577], [0, 1], {
		extrapolateLeft: 'clamp',
	});

	const eudaimoniaOpacity = interpolate(frame, [30, 50], [1, 0], {
		extrapolateLeft: 'clamp',
	});
	const eudaimonia2Opacity = interpolate(frame, [30, 50], [0, 1], {
		extrapolateLeft: 'clamp',
	});
	const parthenonProgress = interpolate(frame, [60, 80], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const socratesProgress = interpolate(frame, [90, 110], [100, 20], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{backgroundColor: 'var(--yellow)', justifyContent: 'center'}}
			>
				<BlockTitle
					style={{
						fontSize: '300px',
						opacity: eudaimoniaOpacity,
						marginTop: '-300px',
					}}
				>
					EUDAIMONIA
				</BlockTitle>
				<AbsoluteFill style={{justifyContent: 'center'}}>
					<BlockTitle
						style={{
							letterSpacing: '-.07em',
							opacity: eudaimonia2Opacity,
							marginTop: '-300px',
						}}
					>
						ΕΥΔΑΙΜΟΝΙΑ
					</BlockTitle>
				</AbsoluteFill>
				<img
					src={parthenon}
					alt=""
					style={{
						width: '700px',
						position: 'absolute',
						transform: `translateY(${parthenonProgress}%)`,
						left: '0',
						bottom: '0',
					}}
				/>
				<img
					src={socrates}
					alt=""
					style={{
						width: '500px',
						position: 'absolute',
						transform: `rotate(-25deg) translateY(${socratesProgress}%)`,
						right: 0,
						bottom: 0,
					}}
				/>
			</AbsoluteFill>
			<Sequence from={125} durationInFrames={Infinity}>
				<AbsoluteFill
					style={{
						backgroundColor: 'var(--blue)',
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
			</Sequence>
		</>
	);
};
