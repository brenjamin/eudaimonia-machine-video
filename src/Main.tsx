import {Sequence} from 'remotion';
import {Scene1DeepWorkIsRare} from './Scene1DeepWorkIsRare';
import {Scene2DeepWorkIsHard} from './Scene2DeepWorkIsHard';
import {Scene3EudaimoniaMachine} from './Scene3EudaimoniaMachine';

export const Main: React.FC = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={150}>
				<Scene1DeepWorkIsRare />
			</Sequence>
			<Sequence from={150} durationInFrames={120}>
				<Scene2DeepWorkIsHard />
			</Sequence>
			<Sequence from={270} durationInFrames={180}>
				<Scene3EudaimoniaMachine />
			</Sequence>
		</>
	);
};
