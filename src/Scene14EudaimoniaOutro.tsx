import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';
import styled from 'styled-components';
import machine from './img/eudaimonia-machine.png';
import {Animation} from 'remotion-animation';

export const Scene14EudaimoniaOutro: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
		text-align: center;
	`;

	const slideProgress = interpolate(
		frame,
		[0, 79, 80, 100],
		[-100, -100, -100, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	const AltTitle = styled.div`
		font-family: var(--sans);
		font-weight: 600;
		font-size: 75px;
		text-align: center;
	`;

	// const waveOpacity = interpolate([], []);
	// const waveTranslate;

	// const headphonesOpacity;
	// const headphonesScale;

	// const mountainOpacity;
	// const mountainScale;

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
				<AbsoluteFill
					style={{
						backgroundColor: 'var(--blue)',
						transform: `translateY(${slideProgress}%)`,
					}}
				>
					<Sequence
						from={100}
						durationInFrames={Infinity}
						style={{
							position: 'relative',
							height: '100%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
						}}
					>
						<Animation
							duration={3.5}
							f0={{opacity: 0, transform: 'translateX(-30px)'}}
							f15={{opacity: 0.5, transform: 'translateX(30px)'}}
							f30={{opacity: 1, transform: 'translateX(0)'}}
						>
							<AltTitle>
								<span style={{fontSize: '180px'}}>🌊</span>
								<br />
								Achieve
								<br />
								Flow
							</AltTitle>
						</Animation>
						<Animation
							duration={3.5}
							f0={{opacity: 0, transform: 'scale(1)'}}
							f35={{opacity: 0, transform: 'scale(1)'}}
							f50={{opacity: 0.5, transform: 'scale(1.1)'}}
							f55={{opacity: 1, transform: 'scale(1)'}}
						>
							<AltTitle>
								<span style={{fontSize: '180px'}}>🎧</span>
								<br />
								Perform
								<br />
								Deep Work
							</AltTitle>
						</Animation>
						<Animation
							duration={3.5}
							f0={{opacity: 0, transform: 'translateY(30px)'}}
							f70={{opacity: 0, transform: 'translateY(30px)'}}
							f85={{opacity: 0.5, transform: 'translateY(-30px)'}}
							f100={{opacity: 1, transform: 'translateY(0px)'}}
						>
							<AltTitle>
								<span style={{fontSize: '180px'}}>⛰️</span>
								<br />
								Reach
								<br />
								Peak Potential
							</AltTitle>
						</Animation>
					</Sequence>
				</AbsoluteFill>
			</AbsoluteFill>
		</>
	);
};
