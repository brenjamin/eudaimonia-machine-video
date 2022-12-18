import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import devices from './img/devices.svg';

export const Scene2DeepWorkIsHard: React.FC = () => {
	const frame = useCurrentFrame();

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 300px;
		text-align: center;
	`;

	const opacity1 = interpolate(frame, [130, 131], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity2 = interpolate(frame, [135, 136], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity3 = interpolate(frame, [142, 143], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity4 = interpolate(frame, [152, 153], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity5 = interpolate(frame, [157, 159], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const devicesProgress = interpolate(frame, [0, 120], [-100, 100]);

	return (
		<>
			<AbsoluteFill style={{backgroundColor: 'var(--yellow)'}}>
				<AbsoluteFill
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						transform: `translateY(${devicesProgress}%)`,
					}}
				>
					<img
						style={{width: '50%', margin: '0 auto', filter: 'saturate(1.75)'}}
						src={devices}
						alt=""
					/>
				</AbsoluteFill>
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
