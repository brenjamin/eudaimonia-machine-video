import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import openoffice from './img/open-office.jpg';
import styled from 'styled-components';

export const Scene7OpenOffices: React.FC = () => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();

	const imageSlide = interpolate(frame, [0, 360], [width / 6, -width / 6]);
	const imageOpacity = interpolate(frame, [0, 15], [0, 1]);

	return (
		<>
			<AbsoluteFill
				style={{
					opacity: imageOpacity,
					transform: `scale(1.5) translateX(${imageSlide}px)`,
				}}
			>
				<img src={openoffice} />
			</AbsoluteFill>
		</>
	);
};
