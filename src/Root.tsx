import {Composition, Still} from 'remotion';
import {Main} from './Main';
import {Scene1DeepWorkIsRare} from './Scene1DeepWorkIsRare';
import {Scene1aKnowledgeWorkers} from './Scene1aKnowledgeWorkers';
import {Scene2DeepWorkIsHard} from './Scene2DeepWorkIsHard';

import {Scene14EudaimoniaOutro} from './Scene14EudaimoniaOutro';
import {Scene15Outro} from './Scene15Outro';
import {Narration} from './Narration';
import {Thumbnail} from './Thumbnail';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Scene1DeepWorkIsRare"
				component={Scene1DeepWorkIsRare}
				durationInFrames={420}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene1aKnowledgeWorkers"
				component={Scene1aKnowledgeWorkers}
				durationInFrames={420}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene2DeepWorkIsHard"
				component={Scene2DeepWorkIsHard}
				durationInFrames={180}
				fps={30}
				width={1920}
				height={1080}
			/>

			<Composition
				id="Scene14EudaimoniaOutro"
				component={Scene14EudaimoniaOutro}
				durationInFrames={1020}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene15Outro"
				component={Scene15Outro}
				durationInFrames={715}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Narration"
				component={Narration}
				durationInFrames={4020}
				fps={30}
				width={1920}
				height={1080}
			/>
			
			<Composition
				id="Main"
				component={Main}
				durationInFrames={10350}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Still id="Thumbnail" component={Thumbnail} width={1920} height={1080} />
		</>
	);
};
