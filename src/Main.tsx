import {Sequence, useVideoConfig} from 'remotion';
import {Scene10Salon} from './Scene10Salon';
import {Scene11Library} from './Scene11Library';
import {Scene12Office} from './Scene12Office';
import {Scene13DeepWorkChambers} from './Scene13DeepWorkChambers';
import {Scene1DeepWorkIsRare} from './Scene1DeepWorkIsRare';
import {Scene2DeepWorkIsHard} from './Scene2DeepWorkIsHard';
import {Scene3EudaimoniaMachine} from './Scene3EudaimoniaMachine';
import {Scene4Eudaimonia} from './Scene4Eudaimonia';
import {Scene4aAchieveEudaimonia} from './Scene4aAchieveEudaimonia';
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
			<Sequence from={0} durationInFrames={10350}>
				<Narration />
			</Sequence>
			<Sequence from={0} durationInFrames={540}>
				<Scene1DeepWorkIsRare />
			</Sequence>
			<Sequence from={540} durationInFrames={760}>
				<Scene1aKnowledgeWorkers />
			</Sequence>
			<Sequence from={1300} durationInFrames={210}>
				<Scene2DeepWorkIsHard />
			</Sequence>
			<Sequence from={1510} durationInFrames={270}>
				<Scene3EudaimoniaMachine />
			</Sequence>
			<Sequence from={1780} durationInFrames={760}>
				<Scene4Eudaimonia />
			</Sequence>
			<Sequence from={2540} durationInFrames={940}>
				<Scene4aAchieveEudaimonia />
			</Sequence>
			<Sequence from={3480} durationInFrames={620}>
				<Scene5DavidDewane />
			</Sequence>
			<Sequence from={4100} durationInFrames={1620}>
				<Scene6Building />
			</Sequence>
			<Sequence from={5700} durationInFrames={395}>
				<Scene7OpenOffices />
			</Sequence>
			<Sequence from={6095} durationInFrames={380}>
				<Scene8MachinePurpose />
			</Sequence>
			<Sequence from={6475} durationInFrames={360}>
				<Scene9Gallery />
			</Sequence>
			<Sequence from={6835} durationInFrames={405}>
				<Scene10Salon />
			</Sequence>
			<Sequence from={7240} durationInFrames={455}>
				<Scene11Library />
			</Sequence>
			<Sequence from={7695} durationInFrames={230}>
				<Scene12Office />
			</Sequence>
			<Sequence from={7925} durationInFrames={720}>
				<Scene13DeepWorkChambers />
			</Sequence>
			<Sequence from={8645} durationInFrames={1020}>
				<Scene14EudaimoniaOutro />
			</Sequence>
			<Sequence from={8920} durationInFrames={1430}>
				<OutroMusic />
			</Sequence>
			<Sequence from={9635} durationInFrames={715}>
				<Scene15Outro />
			</Sequence>
		</>
	);
};
