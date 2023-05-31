import {Sequence, useVideoConfig} from 'remotion';
import {Scene1DeepWorkIsRare} from './Scene1DeepWorkIsRare';
import {Scene2DeepWorkIsHard} from './Scene2DeepWorkIsHard';

import {Scene15Outro} from './Scene15Outro';
import {Narration} from './Narration';
import {OutroMusic} from './OutroMusic';
import {Scene1aKnowledgeWorkers} from './Scene1aKnowledgeWorkers';

export const Main: React.FC = () => {
	return (
		<>
			<Sequence durationInFrames={10350}>
				<Narration />
			</Sequence>
			<Sequence durationInFrames={540}>
				<Scene1DeepWorkIsRare />
			</Sequence>
			<Sequence from={540} durationInFrames={760}>
				<Scene1aKnowledgeWorkers />
			</Sequence>
			<Sequence from={1300} durationInFrames={210}>
				<Scene2DeepWorkIsHard />
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
