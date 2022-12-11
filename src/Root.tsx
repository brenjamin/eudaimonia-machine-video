import {Composition} from 'remotion';
import {Main} from './Main';
import {Scene1DeepWorkIsRare} from './Scene1DeepWorkIsRare';
import {Scene2DeepWorkIsHard} from './Scene2DeepWorkIsHard';
import {Scene3EudaimoniaMachine} from './Scene3EudaimoniaMachine';
import {Scene4Eudaimonia} from './Scene4Eudaimonia';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Scene1DeepWorkIsRare"
				component={Scene1DeepWorkIsRare}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene2DeepWorkIsHard"
				component={Scene2DeepWorkIsHard}
				durationInFrames={120}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene3EudaimoniaMachine"
				component={Scene3EudaimoniaMachine}
				durationInFrames={180}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene4Eudaimonia"
				component={Scene4Eudaimonia}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={450}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
