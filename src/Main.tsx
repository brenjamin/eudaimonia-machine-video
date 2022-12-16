import {Sequence} from 'remotion';
import {Scene1DeepWorkIsRare} from './Scene1DeepWorkIsRare';
import {Scene2DeepWorkIsHard} from './Scene2DeepWorkIsHard';
import {Scene3EudaimoniaMachine} from './Scene3EudaimoniaMachine';
import {Scene4Eudaimonia} from './Scene4Eudaimonia';
import {Scene5DavidDewane} from './Scene5DavidDewane';
import {Scene6Building} from './Scene6Building';
import {Scene7OpenOffices} from './Scene7OpenOffices';
import {Scene8MachinePurpose} from './Scene8MachinePurpose';

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
			<Sequence from={450} durationInFrames={240}>
				<Scene4Eudaimonia />
			</Sequence>
			<Sequence from={690} durationInFrames={240}>
				<Scene5DavidDewane />
			</Sequence>
			<Sequence from={930} durationInFrames={240}>
				<Scene6Building />
			</Sequence>
			<Sequence from={1170}>
				<Scene7OpenOffices />
			</Sequence>
			<Sequence from={1410}>
				<Scene8MachinePurpose />
			</Sequence>
		</>
	);
};
