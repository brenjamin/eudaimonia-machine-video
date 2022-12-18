import {AbsoluteFill, staticFile, Audio} from 'remotion';
export const Narration: React.FC = () => {
	return (
		<AbsoluteFill>
			<Audio src={staticFile('eudaimonia-machine.mp3')} />;
		</AbsoluteFill>
	);
};
