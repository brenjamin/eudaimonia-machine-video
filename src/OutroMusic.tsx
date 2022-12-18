import {
	AbsoluteFill,
	staticFile,
	Audio,
	interpolate,
	useVideoConfig,
} from 'remotion';
export const OutroMusic: React.FC = () => {
	const {fps} = useVideoConfig();
	return (
		<AbsoluteFill>
			<Audio
				volume={(f) =>
					interpolate(
						f,
						[0, fps * 21, fps * 21.1, fps * 32],
						[0.1, 0.1, 0.5, 0.5],
						{extrapolateLeft: 'clamp'}
					)
				}
				loop
				src={staticFile('outro.mp3')}
			/>
			;
		</AbsoluteFill>
	);
};
