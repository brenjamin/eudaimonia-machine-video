import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';
import {Animation} from 'remotion-animation';
import styled from 'styled-components';
import mountains from './img/mountains.jpg';

export const Scene15Outro: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const slowSpin = interpolate(frame, [0, 180], [0, 360]);
	const fastSpin = interpolate(frame, [0, 90], [0, 360]);
	const reverseSpin = interpolate(frame, [0, 45], [0, -360]);

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 60px;
		text-align: center;
	`;

	const AltTitle = styled.div`
		font-family: var(--sans);
		font-weight: 600;
		font-size: 75px;
		text-align: center;
	`;

	const normalizedBirdStep = (offset: number = 0) => {
		const birdStep = Math.floor((frame + offset) / (fps / 10));
		return (birdStep - Math.floor(frame / fps) * 10) * 90;
	};

	const likeAndSubscribeProgress = interpolate(
		frame,
		[fps * 2, fps * 2.5, fps * 12, fps * 12.75],
		[-height / 6, 0, 0, height / 12],
		{extrapolateRight: 'clamp'}
	);

	const likeAndSubscribeOpacity = interpolate(
		frame,
		[fps * 12, fps * 12.75],
		[1, 0],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
	);
	const cursorScale = interpolate(frame, [fps * 3, fps * 3.3], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const cursorOpacity = interpolate(frame, [fps * 10, fps * 10.2], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const cursorTranslateX = interpolate(
		frame,
		[fps * 4, fps * 4.5, fps * 5.5, fps * 6.5, fps * 7.5, fps * 8.5],
		[-50, -250, -250, 70, 70, 250],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
	);

	const cursorTranslateY = interpolate(
		frame,
		[fps * 4, fps * 4.5, fps * 5.5, fps * 6.5],
		[0, -58, -58, -58],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
	);

	const likeRotate = interpolate(
		frame,
		[fps * 4.6, fps * 4.7, fps * 4.85, fps * 4.95],
		[0, -25, -25, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.bounce,
		}
	);

	const likeFillOpacity = interpolate(frame, [fps * 4.6, fps * 4.7], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const subscribeBackground = interpolate(
		frame,
		[fps * 6.5, fps * 6.6],
		[0, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const subscribeEffectOpacity = interpolate(
		frame,
		[fps * 6.5, fps * 6.8],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const subscribeEffectScale = interpolate(
		frame,
		[fps * 6.5, fps * 6.8],
		[0, 2],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const BrophyOpacity = interpolate(frame, [fps * 10, fps * 10.5], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const slideIn = interpolate(frame, [0, 30], [100, 0], {
		extrapolateRight: 'clamp',
	});

	const bellFill = interpolate(frame, [fps * 8.5, fps * 8.6], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const bellRotate = interpolate(
		frame,
		[
			fps * 8.6,
			fps * 8.7,
			fps * 8.8,
			fps * 8.9,
			fps * 9,
			fps * 9.1,
			fps * 9.2,
			fps * 9.3,
			fps * 9.4,
		],
		[0, 5, -5, 4, -4, 2, -2, 1, 0],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
	);

	const bellNoiseOpacity = interpolate(frame, [fps * 8.6, fps * 8.7], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const bellNoiseTranslate = interpolate(
		frame,
		[fps * 8.6, fps * 8.7],
		[2, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill style={{transform: `translateX(${slideIn}%)`}}>
			<AbsoluteFill>
				<div
					style={{
						fontSize: '100px',
						color: 'white',
						fontFamily: 'var(--block)',
						position: 'absolute',
						left: '20px',
						bottom: '20px',
						zIndex: '10',
						opacity: BrophyOpacity,
					}}
				>
					Ben Brophy
				</div>
				<img
					src={mountains}
					style={{
						objectFit: 'cover',
						objectPosition: 'center center',
						height: '100%',
						width: '100%',
						position: 'absolute',
						bottom: 0,
					}}
				/>
				<Sequence durationInFrames={Infinity} from={fps * 0}>
					<div
						style={{
							position: 'absolute',
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '80px',
							top: height / 10,
							opacity: likeAndSubscribeOpacity,
							transform: `translateY(${likeAndSubscribeProgress}px)`,
						}}
					>
						<div
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								bottom: 0,
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<svg
								width="36px"
								height="36px"
								viewBox="0 0 36 36"
								version="1.1"
								preserveAspectRatio="xMidYMid meet"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								style={{
									width: '55px',
									height: 'auto',
									position: 'relative',
									top: '100px',
									transform: `scale(${cursorScale}) translate(${cursorTranslateX}px, ${cursorTranslateY}px)`,
									transformOrigin: 'center center',
									transformBox: 'fill-box',
									zIndex: '10',
									opacity: cursorOpacity,
								}}
							>
								<path
									class="clr-i-outline clr-i-outline-path-1"
									fill="#000"
									d="M30.74,15.19a13.66,13.66,0,0,0-6.87-3.83A26,26,0,0,0,18,10.58V5.28A3.4,3.4,0,0,0,14.5,2,3.4,3.4,0,0,0,11,5.28v10L9.4,13.7a3.77,3.77,0,0,0-5.28,0A3.67,3.67,0,0,0,3,16.33a3.6,3.6,0,0,0,1,2.56l4.66,5.52a11.53,11.53,0,0,0,1.43,4,10.12,10.12,0,0,0,2,2.54v1.92a1.07,1.07,0,0,0,1,1.08H27a1.07,1.07,0,0,0,1-1.08v-2.7a12.81,12.81,0,0,0,3-8.36v-6A1,1,0,0,0,30.74,15.19Z"
								></path>
								<path
									fill="white"
									d="M29,21.86a10.72,10.72,0,0,1-2.6,7.26,1.11,1.11,0,0,0-.4.72V32H14.14V30.52a1,1,0,0,0-.44-.83,7.26,7.26,0,0,1-1.82-2.23,9.14,9.14,0,0,1-1.2-3.52,1,1,0,0,0-.23-.59L5.53,17.53a1.7,1.7,0,0,1,0-2.42,1.76,1.76,0,0,1,2.47,0l3,3v3.14l2-1V5.28A1.42,1.42,0,0,1,14.5,4,1.42,1.42,0,0,1,16,5.28v11.8l2,.43V12.59a24.27,24.27,0,0,1,2.51.18V18l1.6.35V13c.41.08.83.17,1.26.28a14.88,14.88,0,0,1,1.53.49v5.15l1.6.35V14.5A11.06,11.06,0,0,1,29,16.23Z"
								></path>
							</svg>
						</div>
						<svg
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 487.57 487.57"
							style={{
								width: '70px',
								overflow: 'visible',
								transform: `rotate(${likeRotate}deg)`,
							}}
							xml:space="preserve"
						>
							<g>
								<path
									fillOpacity={likeFillOpacity}
									fill="white"
									strokeWidth="25"
									stroke="black"
									d="M137.482,253.8c0.7-2,1.5-4.2,2.4-6.5l0,0l0,0c3.8-9.4,10.1-20.9,19.9-31.2c46-35.3,94.2-168,94.2-168s-7.5-48.1,15-48.1
		s76,15,43.9,112.3c-32.1,97.4,0,82.4,0,82.4c7.4-1.7,14.2-3.1,20.7-4.2l0,0c0,0,92.7-20.8,126.9,10.5c27.4,25,6.1,58,6.1,58
		s38.5,34.3-0.7,75.3c0,0,25.1,41.5-19,74.6c0,0,20.5,57.1-61.4,74.5c-24.1,5.1-54.4,4.9-83,2.7c-71.5,1.5-142.6-7.8-142.6-7.8
		l-46-200.1C127.782,269.8,134.382,260.1,137.482,253.8z M4.182,281l-0.1,200h108.7c9.7,0,16-7.7,14-17.2l-34.8-165.6
		c-2-9.5-11.5-17.2-21.2-17.2L4.182,281L4.182,281z"
								/>
							</g>
						</svg>
						<div
							style={{
								borderRadius: '100px',
								padding: '18px 32px',
								fontFamily: 'Roboto',
								fontWeight: 500,
								border: '3px black solid',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: '45px',
								backgroundColor: `rgba(255, 255, 255,${subscribeBackground})`,
								position: 'relative',
							}}
						>
							<div
								style={{
									borderRadius: '100px',
									padding: '18px 32px',
									backgroundColor: `rgba(255, 255, 255,1)`,
									position: 'absolute',
									zIndex: '-1',
									opacity: subscribeEffectOpacity,
									transform: `scale(${subscribeEffectScale})`,
									width: '100%',
									height: '100%',
								}}
							></div>
							<span style={{position: 'relative', display: 'inline-block'}}>
								Subscribe
							</span>
						</div>
						<svg
							width="90px"
							height="90px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							transform={`rotate(${bellRotate})`}
							style={{
								transformOrigin: 'top center',
								transformBox: 'fill-box',
							}}
						>
							<path
								stroke="#000000"
								fill="white"
								fillOpacity={bellFill}
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.0002 19C15.0002 20.6569 13.6571 22 12.0002 22C10.3434 22 9.00025 20.6569 9.00025 19M18.0002 11.2C18.0002 9.82087 17.3681 8.49823 16.2429 7.52304C15.1177 6.54786 13.5915 6 12.0002 6C10.4089 6 8.88283 6.54786 7.75761 7.52304C6.63239 8.49823 6.00025 9.82087 6.00025 11.2C6.00025 13.4818 5.43438 15.1506 4.72831 16.3447C3.92359 17.7056 3.52122 18.3861 3.53711 18.5486C3.55529 18.7346 3.58876 18.7933 3.73959 18.9036C3.87142 19 4.53376 19 5.85844 19H18.1421C19.4667 19 20.1291 19 20.2609 18.9036C20.4117 18.7933 20.4452 18.7346 20.4634 18.5486C20.4793 18.3861 20.0769 17.7056 19.2722 16.3447C18.5661 15.1506 18.0002 13.4818 18.0002 11.2ZM18.0002 11.2C18.0002 9.82087 17.3681 8.49823 16.2429 7.52304C15.1177 6.54786 13.5915 6 12.0002 6C10.4089 6 8.88283 6.54786 7.75761 7.52304C6.63239 8.49823 6.00025 9.82087 6.00025 11.2C6.00025 13.4818 5.43438 15.1506 4.72831 16.3447C3.92359 17.7056 3.52122 18.3861 3.53711 18.5486C3.55529 18.7346 3.58876 18.7933 3.73959 18.9036C3.87142 19 4.53376 19 5.85844 19H18.1421C19.4667 19 20.1291 19 20.2609 18.9036C20.4117 18.7933 20.4452 18.7346 20.4634 18.5486C20.4793 18.3861 20.0769 17.7056 19.2722 16.3447C18.5661 15.1506 18.0002 13.4818 18.0002 11.2ZM13.7968 6.23856C14.2322 5.78864 14.5002 5.17562 14.5002 4.5C14.5002 3.11929 13.381 2 12.0002 2C10.6195 2 9.50025 3.11929 9.50025 4.5C9.50025 5.17562 9.76825 5.78864 10.2037 6.23856"
							/>
							<path
								stroke="black"
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.54707 8.32296C2.53272 6.87161 3.3152 5.51631 4.57928 4.80306"
								opacity={bellNoiseOpacity}
								transform={`translate(0, ${bellNoiseTranslate})`}
							/>
							<path
								stroke="black"
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21.4534 8.32296C21.4678 6.87161 20.6853 5.51631 19.4212 4.80306"
								opacity={bellNoiseOpacity}
								transform={`translate(0, ${bellNoiseTranslate})`}
							/>
						</svg>
					</div>
				</Sequence>
			</AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					right: '260px',
					bottom: '205px',
					width: '200px',
					display: 'flex',
					fontSize: '25px',
					overflow: 'visible',
				}}
			>
				<Animation
					duration={2}
					f0={{opacity: 1, transform: 'translateY(0) translateX(45px)'}}
					f25={{opacity: 0.75, transform: 'translateY(-25px) translateX(50px)'}}
					f50={{opacity: 0.5, transform: 'translateY(-50px) translateX(55px)'}}
					f75={{opacity: 0.25, transform: 'translateY(-75px) translateX(50px)'}}
					f100={{opacity: 0, transform: 'translateY(-100px) translateX(45px)'}}
					style={{animationTimingFunction: 'linear', overflow: 'visible'}}
				>
					<div>😊</div>
				</Animation>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={4 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(40px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(35px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(30px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(35px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(40px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={6 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(35px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(40px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(45px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(40px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(35px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={8 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(75px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(80px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(85px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(80px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(75px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={12 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(100px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(95px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(90px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(95px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(100px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={14 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(0px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(5px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(10px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(5px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(0px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={17 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(75px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(80px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(85px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(80px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(75px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={24 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(40px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(35px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(30px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(35px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(40px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={18 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(0px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(5px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(10px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(5px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(0px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={22 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(40px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(35px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(30px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(35px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(40px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={28 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(40px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(35px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(30px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(35px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(40px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={33 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(100px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(95px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(90px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(95px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(100px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={36 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(40px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(35px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(30px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(35px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(40px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
				<Sequence
					durationInFrames={2 * fps}
					style={{overflow: 'visible'}}
					from={40 * fps}
				>
					<Animation
						duration={2}
						f0={{opacity: 1, transform: 'translateY(0) translateX(100px)'}}
						f25={{
							opacity: 0.75,
							transform: 'translateY(-25px) translateX(95px)',
						}}
						f50={{
							opacity: 0.5,
							transform: 'translateY(-50px) translateX(90px)',
						}}
						f75={{
							opacity: 0.25,
							transform: 'translateY(-75px) translateX(95px)',
						}}
						f100={{
							opacity: 0,
							transform: 'translateY(-100px) translateX(100px)',
						}}
						style={{animationTimingFunction: 'linear'}}
					>
						<div>😊</div>
					</Animation>
				</Sequence>
			</div>
			<svg
				version="1.1"
				id="Capa_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 469.122 469.122"
				xml:space="preserve"
				style={{
					height: 'auto',
					position: 'absolute',
					right: '300px',
					bottom: '100px',
					width: '200px',
					zIndex: '10',
					overflow: 'visible',
				}}
			>
				<g>
					<path
						style={{fill: '#496A72'}}
						d="M102.43,159.716c0,15.46-12.53,28-28,28c-1.71,0-3.38-0.15-5-0.45c-13.08-2.35-23-13.8-23-27.55
		s9.92-25.2,23-27.55c1.62-0.3,3.29-0.45,5-0.45C89.9,131.716,102.43,144.255,102.43,159.716z"
					/>
					<path
						style={{fill: '#345156'}}
						d="M92.43,159.716c0,13.75-9.92,25.2-23,27.55c-13.08-2.35-23-13.8-23-27.55s9.92-25.2,23-27.55
		C82.51,134.516,92.43,145.966,92.43,159.716z"
					/>
					<rect
						x="355.284"
						y="146.465"
						style={{fill: '#CCCCCC'}}
						width="20.216"
						height="57"
					/>
					<rect
						x="350.346"
						y="249.965"
						style={{fill: '#E6E6E6'}}
						width="79.655"
						height="50"
					/>
					<rect
						x="131.205"
						y="189.465"
						style={{fill: '#CCCCCC'}}
						width="219.141"
						height="134"
					/>
					<g>
						<rect
							x="215.5"
							y="270.465"
							style={{fill: '#738B93'}}
							width="19.5"
							height="45"
						/>
						<rect
							x="210.5"
							y="270.465"
							style={{fill: '#244D54'}}
							width="5"
							height="45"
						/>
						<rect
							x="221.5"
							y="276.465"
							style={{fill: '#244D54'}}
							width="7.5"
							height="33"
						/>
						<polygon
							style={{fill: '#808080'}}
							points="254.12,315.846 249.88,320.086 221.5,291.706 221.5,283.226 		"
						/>
						<circle style={{fill: '#EF7954'}} cx="252" cy="317.965" r="7" />
					</g>
					<rect
						x="350.346"
						y="203.465"
						style={{fill: '#999999'}}
						width="91.655"
						height="21"
					/>
					<rect
						x="350.346"
						y="224.465"
						style={{fill: '#CCCCCC'}}
						width="83.988"
						height="15"
					/>
					<rect
						x="350.346"
						y="239.465"
						style={{fill: '#999999'}}
						width="91.655"
						height="10.5"
					/>
					<rect
						x="350.346"
						y="299.965"
						style={{fill: '#999999'}}
						width="91.655"
						height="10.5"
					/>
					<rect
						x="98.341"
						y="189.465"
						style={{fill: '#808080'}}
						width="32.864"
						height="134"
					/>
					<g>
						<rect
							x="52.357"
							y="249.965"
							style={{fill: '#E6E6E6'}}
							width="78.644"
							height="50"
						/>
						<rect
							x="12"
							y="249.965"
							style={{fill: '#B3B3B3'}}
							width="40.356"
							height="50"
						/>
					</g>
					<rect
						x="39.55"
						y="203.465"
						style={{fill: '#999999'}}
						width="91.655"
						height="21"
					/>
					<rect
						x="52.356"
						y="224.465"
						style={{fill: '#CCCCCC'}}
						width="91.655"
						height="15"
					/>
					<rect
						x="39.55"
						y="239.465"
						style={{fill: '#999999'}}
						width="91.655"
						height="10.5"
					/>
					<rect
						x="0"
						y="203.465"
						style={{fill: '#808080'}}
						width="39.55"
						height="21"
					/>
					<rect
						x="0"
						y="125.657"
						style={{fill: '#B3B3B3'}}
						width="39.55"
						height="77.809"
					/>
					<rect
						x="12"
						y="224.465"
						style={{fill: '#B3B3B3'}}
						width="40.356"
						height="15"
					/>
					<rect
						x="0"
						y="239.465"
						style={{fill: '#808080'}}
						width="39.55"
						height="10.5"
					/>
					<rect
						x="39.55"
						y="299.965"
						style={{fill: '#999999'}}
						width="91.655"
						height="10.5"
					/>
					<rect
						x="0"
						y="299.965"
						style={{fill: '#808080'}}
						width="39.55"
						height="10.5"
					/>
					<path
						style={{
							fill: '#496A72',
							transformOrigin: 'center center',
							transformBox: 'fill-box',
						}}
						transform={`rotate(${fastSpin})`}
						d="M335.531,282.201c18.147-18.147,18.147-47.569,0-65.716c-18.147-18.147-47.569-18.147-65.716,0
		s-18.147,47.569,0,65.716C287.962,300.348,317.384,300.348,335.531,282.201z M283.765,273.646l14.245-14.245
		c2.953,1.368,6.374,1.368,9.327,0l14.245,14.245C310.492,282.295,294.854,282.295,283.765,273.646z M326.976,268.251
		l-14.245-14.245c1.368-2.953,1.368-6.374,0-9.327l14.245-14.245C335.625,241.524,335.625,257.162,326.976,268.251z M321.581,225.04
		l-14.245,14.245c-2.953-1.368-6.374-1.368-9.327,0l-14.245-14.245C294.854,216.391,310.492,216.391,321.581,225.04z
		 M278.37,230.435l14.245,14.245c-1.368,2.953-1.368,6.374,0,9.327l-14.245,14.245C269.721,257.162,269.721,241.524,278.37,230.435z
		"
					/>
					<rect
						x="121.667"
						y="189.465"
						style={{fill: '#808080'}}
						width="9.538"
						height="134"
					/>
					<path
						style={{
							fill: '#496A72',
							transformOrigin: 'center center',
							transformBox: 'fill-box',
						}}
						transform={`rotate(${slowSpin})`}
						d="M194.064,226.782c-13.271-13.271-34.788-13.271-48.06,0c-13.271,13.271-13.271,34.788,0,48.06
		s34.788,13.271,48.06,0C207.335,261.57,207.335,240.053,194.064,226.782z M187.807,264.64l-10.418-10.418
		c1.001-2.159,1.001-4.662,0-6.821l10.418-10.418C194.133,245.094,194.133,256.53,187.807,264.64z M183.862,233.038l-10.418,10.418
		c-2.159-1.001-4.662-1.001-6.821,0l-10.418-10.418C164.316,226.713,175.752,226.713,183.862,233.038z M152.261,236.984
		l10.418,10.418c-1.001,2.159-1.001,4.662,0,6.821l-10.418,10.418C145.935,256.53,145.935,245.094,152.261,236.984z
		 M156.206,268.585l10.418-10.418c2.159,1.001,4.662,1.001,6.821,0l10.418,10.418C175.752,274.91,164.316,274.91,156.206,268.585z"
					/>
					<path
						style={{
							fill: '#496A72',
							transformOrigin: 'center center',
							transformBox: 'fill-box',
						}}
						transform={`rotate(${reverseSpin})`}
						d="M457.112,122.718c-16.013-16.013-41.976-16.013-57.989,0c-16.013,16.013-16.013,41.976,0,57.989
		c16.013,16.013,41.976,16.013,57.989,0C473.125,164.694,473.125,138.731,457.112,122.718z M449.562,168.397l-12.57-12.57
		c1.207-2.605,1.207-5.625,0-8.23l12.57-12.57C457.195,144.813,457.195,158.612,449.562,168.397z M444.802,130.267l-12.57,12.57
		c-2.605-1.207-5.625-1.207-8.23,0l-12.57-12.57C421.217,122.635,435.017,122.635,444.802,130.267z M406.672,135.027l12.57,12.57
		c-1.207,2.605-1.207,5.625,0,8.23l-12.57,12.57C399.039,158.612,399.039,144.813,406.672,135.027z M411.432,173.158l12.57-12.57
		c2.605,1.207,5.625,1.207,8.23,0l12.57,12.57C435.017,180.79,421.217,180.79,411.432,173.158z"
					/>
					<g>
						<g>
							<rect
								x="41.455"
								y="101.324"
								style={{fill: '#808080'}}
								width="34.762"
								height="8.111"
							/>
							<rect
								x="10.556"
								y="101.324"
								style={{fill: '#999999'}}
								width="30.899"
								height="8.111"
							/>
							<rect
								x="41.455"
								y="117.546"
								style={{fill: '#808080'}}
								width="34.762"
								height="8.111"
							/>
							<rect
								x="10.556"
								y="117.546"
								style={{fill: '#999999'}}
								width="30.899"
								height="8.111"
							/>
							<rect
								x="43"
								y="109.435"
								style={{fill: '#B3B3B3'}}
								width="28.968"
								height="8.111"
							/>
							<rect
								x="14.032"
								y="109.435"
								style={{fill: '#CCCCCC'}}
								width="28.968"
								height="8.111"
							/>
						</g>
						<g>
							<rect
								x="23.72"
								y="65.324"
								width="69.333"
								height="4.667"
								style={{
									fill: '#999999',
								}}
							/>
							<path
								style={{fill: '#999999'}}
								d="M97.053,59.657h2c4.418,0,8,3.582,8,8v0c0,4.418-3.582,8-8,8h-2c-4.418,0-8-3.582-8-8v0
			C89.053,63.239,92.635,59.657,97.053,59.657z"
							/>
						</g>

						<rect
							x="20.386"
							y="79.99"
							style={{fill: '#999999'}}
							width="46"
							height="21.333"
						/>
						<rect
							x="37.72"
							y="58.657"
							style={{fill: '#808080'}}
							width="11.333"
							height="21.333"
						/>
						<rect
							x="37.72"
							y="58.657"
							style={{fill: '#999999'}}
							width="5.667"
							height="21.333"
						/>

						<rect
							x="20.386"
							y="79.99"
							style={{fill: '#CCCCCC'}}
							width="11.667"
							height="21.333"
						/>
					</g>
					<rect
						x="375.5"
						y="146.465"
						style={{fill: '#E6E6E6'}}
						width="49"
						height="85"
					/>
					<rect
						x="364.5"
						y="224.465"
						style={{fill: '#E6E6E6'}}
						width="11"
						height="7"
					/>
					<rect
						x="337.852"
						y="146.465"
						style={{fill: '#E6E6E6'}}
						width="37.648"
						height="26.5"
					/>
					<path
						style={{fill: '#E6E6E6'}}
						d="M425.253,156.959h-1.251v-10.494h1.251c2.898,0,5.247,2.349,5.247,5.247l0,0
		C430.5,154.61,428.151,156.959,425.253,156.959z"
					/>
					<path
						style={{fill: '#999999'}}
						d="M337.852,172.966L337.852,172.966c-7.318,0-13.25-5.932-13.25-13.25v0
		c0-7.318,5.932-13.25,13.25-13.25h0c7.318,0,13.25,5.932,13.25,13.25v0C351.102,167.033,345.17,172.966,337.852,172.966z"
					/>
					<path
						style={{fill: '#CCCCCC'}}
						d="M340.79,159.716c0,3.45-2.79,6.25-6.25,6.25h-47.47l-12.78-6.25l12.78-6.25h47.47
		c1.73,0,3.29,0.7,4.42,1.83C340.09,156.425,340.79,157.985,340.79,159.716z"
					/>
					<rect
						x="355.284"
						y="172.965"
						style={{fill: '#999999'}}
						width="20.216"
						height="9.5"
					/>
					<path
						style={{fill: '#B3B3B3'}}
						d="M340.79,159.716c0,3.45-2.79,6.25-6.25,6.25h-47.47l-12.78-6.25H340.79z"
					/>
					<rect
						x="371"
						y="203.465"
						style={{fill: '#CCCCCC'}}
						width="4.5"
						height="21"
					/>
					<rect
						x="360.333"
						y="195.132"
						style={{fill: '#B3B3B3'}}
						width="10.667"
						height="8.333"
					/>
					<rect
						x="39.55"
						y="125.657"
						style={{fill: '#CCCCCC'}}
						width="40.45"
						height="77.809"
					/>
					<g>
						<rect
							x="318.833"
							y="131.966"
							style={{fill: '#999999'}}
							width="49.667"
							height="4.667"
						/>
						<rect
							x="362.833"
							y="125.299"
							style={{fill: '#808080'}}
							width="11.333"
							height="21.333"
						/>
						<rect
							x="368.5"
							y="125.299"
							style={{fill: '#999999'}}
							width="5.667"
							height="21.333"
						/>
						<path
							style={{fill: '#999999'}}
							d="M314.833,126.299h-2c-4.418,0-8,3.582-8,8v0c0,4.418,3.582,8,8,8h2c4.418,0,8-3.582,8-8v0
			C322.833,129.881,319.252,126.299,314.833,126.299z"
						/>
					</g>
					<rect
						x="76.341"
						y="323.465"
						style={{fill: '#999999'}}
						width="312.659"
						height="24"
					/>
					<rect
						x="40.341"
						y="323.465"
						style={{fill: '#808080'}}
						width="56.659"
						height="24"
					/>
					<rect
						x="157"
						y="124.465"
						style={{fill: '#808080'}}
						width="25"
						height="65"
					/>
					<rect
						x="182"
						y="124.465"
						style={{fill: '#999999'}}
						width="34.02"
						height="65"
					/>
					<g>
						<rect
							x="96"
							y="347.465"
							style={{fill: '#B3B3B3'}}
							width="25"
							height="45"
						/>
						<rect
							x="121"
							y="347.465"
							style={{fill: '#CCCCCC'}}
							width="34.02"
							height="45"
						/>
					</g>
					<g>
						<rect
							x="67.641"
							y="392.465"
							style={{fill: '#B3B3B3'}}
							width="49.025"
							height="17.999"
						/>
						<rect
							x="116.666"
							y="392.465"
							style={{fill: '#CCCCCC'}}
							width="66.713"
							height="17.999"
						/>
					</g>
					<g>
						<rect
							x="272.663"
							y="392.465"
							style={{fill: '#B3B3B3'}}
							width="49.025"
							height="17.999"
						/>
						<rect
							x="321.689"
							y="392.465"
							style={{fill: '#CCCCCC'}}
							width="66.713"
							height="17.999"
						/>
					</g>
					<g>
						<rect
							x="301.023"
							y="347.465"
							style={{fill: '#B3B3B3'}}
							width="25"
							height="45"
						/>
						<rect
							x="326.023"
							y="347.465"
							style={{fill: '#CCCCCC'}}
							width="34.02"
							height="45"
						/>
					</g>
					<rect
						x="187"
						y="111.465"
						style={{fill: '#999999'}}
						width="48"
						height="13"
					/>
					<rect
						x="157"
						y="111.465"
						style={{fill: '#808080'}}
						width="48"
						height="13"
					/>
				</g>
			</svg>
			<AbsoluteFill>
				<Animation
					duration={16}
					style={{
						position: 'absolute',
						top: '20%',
						left: '50px',
						animationTimingFunction: 'linear',
						transform: 'scale(0) translateX(-10vw)',
						animationIterationCount: 'infinite',
					}}
					f0={{transform: 'scale(0.3) translateX(-10vw)'}}
					f10={{
						transform: 'translateY(2vh) translateX(10vw) scale(0.4)',
					}}
					f20={{
						transform: 'translateY(0vh) translateX(30vw) scale(0.5)',
					}}
					f30={{
						transform: 'translateY(4vh) translateX(50vw) scale(0.6)',
					}}
					f40={{
						transform: 'translateY(2vh) translateX(70vw) scale(0.6)',
					}}
					f50={{
						transform: 'translateY(0vh) translateX(90vw) scale(0.6)',
					}}
					f60={{
						transform: 'translateY(2vh) translateX(110vw) scale(0.6)',
					}}
					f100={{
						transform: 'translateY(0vh) translateX(110vw) scale(0.6)',
					}}
				>
					<div
						className="bird"
						style={{
							backgroundPosition: `-${normalizedBirdStep()}px 0`,
						}}
					></div>
				</Animation>
				<Sequence from={14} durationInFrames={16 * fps}>
					<Animation
						duration={16}
						style={{
							position: 'absolute',
							top: '20%',
							left: '0px',
							animationTimingFunction: 'linear',
							transform: 'scale(0.3) translateX(-10vw)',
						}}
						f0={{transform: 'scale(0.3) translateX(-10vw)'}}
						f10={{
							transform: 'translateY(2vh) translateX(10vw) scale(0.4)',
						}}
						f20={{
							transform: 'translateY(0vh) translateX(30vw) scale(0.5)',
						}}
						f30={{
							transform: 'translateY(4vh) translateX(50vw) scale(0.6)',
						}}
						f40={{
							transform: 'translateY(2vh) translateX(70vw) scale(0.6)',
						}}
						f50={{
							transform: 'translateY(0vh) translateX(90vw) scale(0.6)',
						}}
						f60={{
							transform: 'translateY(2vh) translateX(110vw) scale(0.6)',
						}}
						f70={{
							transform: 'translateY(2vh) translateX(120vw) scale(0.6)',
						}}
						f100={{
							transform: 'translateY(0vh) translateX(120vw) scale(0.6)',
						}}
					>
						<div
							className="bird"
							style={{
								backgroundPosition: `-${normalizedBirdStep(5)}px 0`,
							}}
						></div>
					</Animation>
				</Sequence>
				<Sequence from={fps * 10} durationInFrames={16 * fps}>
					<Animation
						duration={16}
						style={{
							position: 'absolute',
							top: '20%',
							left: '50px',
							animationTimingFunction: 'linear',
							transform: 'scale(0) translateX(-15vw)',
						}}
						f0={{transform: 'scale(0.5) translateX(-10vw)'}}
						f10={{
							transform: 'translateY(0vh) translateX(10vw) scale(0.4)',
						}}
						f20={{
							transform: 'translateY(-4vh) translateX(30vw) scale(0.6)',
						}}
						f30={{
							transform: 'translateY(1vh) translateX(50vw) scale(0.45)',
						}}
						f40={{
							transform: 'translateY(-2.5vh) translateX(70vw) scale(0.5)',
						}}
						f50={{
							transform: 'translateY(0vh) translateX(90vw) scale(0.45)',
						}}
						f60={{
							transform: 'translateY(0vh) translateX(110vw) scale(0.45)',
						}}
						f100={{
							transform: 'translateY(0vh) translateX(110vw) scale(0.45)',
						}}
					>
						<div
							className="bird"
							style={{
								backgroundPosition: `-${normalizedBirdStep()}px 0`,
							}}
						></div>
					</Animation>
				</Sequence>
				<Sequence from={fps * 9} durationInFrames={16 * fps}>
					<Animation
						duration={16}
						style={{
							position: 'absolute',
							top: '20%',
							left: '0px',
							animationTimingFunction: 'linear',
							transform: 'scale(0) translateX(-15vw)',
						}}
						f0={{transform: 'scale(0.3) translateX(-10vw)'}}
						f10={{
							transform: 'translateY(2vh) translateX(10vw) scale(0.4)',
						}}
						f20={{
							transform: 'translateY(0vh) translateX(30vw) scale(0.5)',
						}}
						f30={{
							transform: 'translateY(4vh) translateX(50vw) scale(0.6)',
						}}
						f40={{
							transform: 'translateY(2vh) translateX(70vw) scale(0.6)',
						}}
						f50={{
							transform: 'translateY(0vh) translateX(90vw) scale(0.6)',
						}}
						f60={{
							transform: 'translateY(2vh) translateX(110vw) scale(0.6)',
						}}
						f70={{
							transform: 'translateY(2vh) translateX(120vw) scale(0.6)',
						}}
						f100={{
							transform: 'translateY(0vh) translateX(120vw) scale(0.6)',
						}}
					>
						<div
							className="bird"
							style={{
								backgroundPosition: `-${normalizedBirdStep(11)}px 0`,
							}}
						></div>
					</Animation>
				</Sequence>
				<Sequence from={fps * 13} durationInFrames={16 * fps}>
					<Animation
						duration={16}
						style={{
							position: 'absolute',
							top: '20%',
							left: '50px',
							animationTimingFunction: 'linear',
							transform: 'scale(0) translateX(-10vw)',
							animationIterationCount: 'infinite',
						}}
						f0={{transform: 'scale(0.3) translateX(-10vw)'}}
						f10={{
							transform: 'translateY(2vh) translateX(10vw) scale(0.4)',
						}}
						f20={{
							transform: 'translateY(0vh) translateX(30vw) scale(0.5)',
						}}
						f30={{
							transform: 'translateY(4vh) translateX(50vw) scale(0.6)',
						}}
						f40={{
							transform: 'translateY(2vh) translateX(70vw) scale(0.6)',
						}}
						f50={{
							transform: 'translateY(0vh) translateX(90vw) scale(0.6)',
						}}
						f60={{
							transform: 'translateY(2vh) translateX(110vw) scale(0.6)',
						}}
						f100={{
							transform: 'translateY(0vh) translateX(110vw) scale(0.6)',
						}}
					>
						<div
							className="bird"
							style={{
								backgroundPosition: `-${normalizedBirdStep()}px 0`,
							}}
						></div>
					</Animation>
				</Sequence>
				<Sequence from={fps * 14} durationInFrames={16 * fps}>
					<Animation
						duration={16}
						style={{
							position: 'absolute',
							top: '20%',
							left: '0px',
							animationTimingFunction: 'linear',
							transform: 'scale(0.3) translateX(-10vw)',
						}}
						f0={{transform: 'scale(0.3) translateX(-10vw)'}}
						f10={{
							transform: 'translateY(2vh) translateX(10vw) scale(0.4)',
						}}
						f20={{
							transform: 'translateY(0vh) translateX(30vw) scale(0.5)',
						}}
						f30={{
							transform: 'translateY(4vh) translateX(50vw) scale(0.6)',
						}}
						f40={{
							transform: 'translateY(2vh) translateX(70vw) scale(0.6)',
						}}
						f50={{
							transform: 'translateY(0vh) translateX(90vw) scale(0.6)',
						}}
						f60={{
							transform: 'translateY(2vh) translateX(110vw) scale(0.6)',
						}}
						f70={{
							transform: 'translateY(2vh) translateX(120vw) scale(0.6)',
						}}
						f100={{
							transform: 'translateY(0vh) translateX(120vw) scale(0.6)',
						}}
					>
						<div
							className="bird"
							style={{
								backgroundPosition: `-${normalizedBirdStep(5)}px 0`,
							}}
						></div>
					</Animation>
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
