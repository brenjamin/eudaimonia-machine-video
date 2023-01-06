import {Sequence, useVideoConfig} from 'remotion';
import {Scene10Salon} from './Scene10Salon';
import {Scene11Library} from './Scene11Library';
import {Scene12Office} from './Scene12Office';
import {Scene13DeepWorkChambers} from './Scene13DeepWorkChambers';
import {Scene1DeepWorkIsRare} from './Scene1DeepWorkIsRare';
import {Scene2DeepWorkIsHard} from './Scene2DeepWorkIsHard';
import {Scene3EudaimoniaMachine} from './Scene3EudaimoniaMachine';
import {Scene4Eudaimonia} from './Scene4Eudaimonia';
import {Scene5DavidDewane} from './Scene5DavidDewane';
import {Scene6Building} from './Scene6Building';
import {Scene7OpenOffices} from './Scene7OpenOffices';
import {Scene8MachinePurpose} from './Scene8MachinePurpose';
import {Scene9Gallery} from './Scene9Gallery';
import {Scene14EudaimoniaOutro} from './Scene14EudaimoniaOutro';
import {Scene15Outro} from './Scene15Outro';
import {Narration} from './Narration';
import {OutroMusic} from './OutroMusic';
import {Scene1aKnowledgeWorkers} from './Scene1aKnowledgeWorkers';

export const Main: React.FC = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={6900}>
				<Narration />
			</Sequence>
			<Sequence from={0} durationInFrames={540}>
				<Scene1DeepWorkIsRare />
			</Sequence>
			<Sequence from={540} durationInFrames={760}>
				<Scene1aKnowledgeWorkers />
			</Sequence>
			<Sequence from={1300} durationInFrames={220}>
				<Scene2DeepWorkIsHard />
			</Sequence>
			<Sequence from={1520} durationInFrames={270}>
				<Scene3EudaimoniaMachine />
			</Sequence>
			{/* <Sequence from={660} durationInFrames={630}>
				<Scene4Eudaimonia />
			</Sequence>
			<Sequence from={1290} durationInFrames={440}>
				<Scene5DavidDewane />
			</Sequence>
			<Sequence from={1730} durationInFrames={750}>
				<Scene6Building />
			</Sequence>
			<Sequence from={2450} durationInFrames={375}>
				<Scene7OpenOffices />
			</Sequence>
			<Sequence from={2810} durationInFrames={380}>
				<Scene8MachinePurpose />
			</Sequence>
			<Sequence from={3190} durationInFrames={360}>
				<Scene9Gallery />
			</Sequence>
			<Sequence from={3550} durationInFrames={390}>
				<Scene10Salon />
			</Sequence>
			<Sequence from={3940} durationInFrames={460}>
				<Scene11Library />
			</Sequence>
			<Sequence from={4400} durationInFrames={230}>
				<Scene12Office />
			</Sequence>
			<Sequence from={4630} durationInFrames={720}>
				<Scene13DeepWorkChambers />
			</Sequence>
			<Sequence from={5350} durationInFrames={250}>
				<Scene14EudaimoniaOutro />
			</Sequence>
			<Sequence from={5560} durationInFrames={1430}>
				<OutroMusic />
			</Sequence>
			<Sequence from={5560} durationInFrames={1430}>
				<Scene15Outro />
			</Sequence> */}
		</>
	);
};
