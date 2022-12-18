import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import machine from './img/eudaimonia-machine.png';
import deepworkchambers from './img/deep-work-chambers.jpg';

export const Scene13DeepWorkChambers: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
		text-align: center;
	`;

	const AltTitle = styled.div`
		font-family: var(--sans);
		font-weight: 700;
		font-size: 75px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 48px;
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
		[-340, -340, -340, -640],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const overlayOpacity = interpolate(frame, [400, 420], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const translateYProgress = interpolate(
		frame,
		[0, 90, 100, 120],
		[30, 30, 30, -60],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const imageSlide = interpolate(frame, [0, 420], [width / 6, -width / 6], {
		extrapolateRight: 'clamp',
	});
	const imageOpacity = interpolate(frame, [100, 120], [0, 1], {
		extrapolateLeft: 'clamp',
	});
	const imageFilter = interpolate(frame, [400, 420], [0, 3], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const scheduleOpacity1 = interpolate(frame, [550, 551], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const scheduleOpacity2 = interpolate(frame, [560, 561], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill style={{backgroundColor: 'var(--yellow)'}}>
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
				<AbsoluteFill style={{opacity: imageOpacity}}>
					<AbsoluteFill
						style={{
							transform: `scale(1.5) translate(${imageSlide}px, 0)`,
							filter: `blur(${imageFilter}px)`,
						}}
					>
						<img src={deepworkchambers} />
					</AbsoluteFill>
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						backgroundColor: 'rgba(0,0,0,.7)',
						opacity: overlayOpacity,
					}}
				>
					<AbsoluteFill
						style={{
							justifyContent: 'space-evenly',
							alignItems: 'center',
							color: 'white',
						}}
					>
						<AltTitle>
							<div>
								🎧
								<br />
								90m
							</div>
							<div>
								🧘
								<br />
								90m
							</div>
						</AltTitle>
						<AltTitle style={{opacity: scheduleOpacity1}}>
							<div>
								🎧
								<br />
								90m
							</div>
							<div>
								🧘
								<br />
								90m
							</div>
						</AltTitle>
						<AltTitle style={{opacity: scheduleOpacity2}}>
							<div>
								🎧
								<br />
								90m
							</div>
							<div>
								🧘
								<br />
								90m
							</div>
						</AltTitle>
					</AbsoluteFill>
				</AbsoluteFill>
			</AbsoluteFill>
		</>
	);
};
