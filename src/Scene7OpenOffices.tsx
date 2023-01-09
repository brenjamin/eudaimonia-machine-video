import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import openoffice from './img/open-office.jpg';

export const Scene7OpenOffices: React.FC = () => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();

	const imageSlide = interpolate(frame, [0, 420], [width / 6, -width / 6]);

	return (
		<>
			<AbsoluteFill
				style={{
					transform: `scale(1.5) translateX(${imageSlide}px)`,
				}}
			>
				<img src={openoffice} />
			</AbsoluteFill>
		</>
	);
};
