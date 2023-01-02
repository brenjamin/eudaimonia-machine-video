import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import doctor from './img/doctor.png';
import lawyer from './img/lawyer.png';
import engineer from './img/engineer.png';
import scientist from './img/scientist.png';

export const Scene1aKnowledgeWorkers: React.FC = () => {
	const frame = useCurrentFrame();

	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 200px;
		text-align: center;
	`;

	const AltTitle = styled.div`
		font-family: var(--sans);
		font-weight: 600;
		font-size: 75px;
		text-align: center;
	`;

	const opacity1 = interpolate(frame, [130, 131], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity2 = interpolate(frame, [135, 136], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity3 = interpolate(frame, [142, 143], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity4 = interpolate(frame, [152, 153], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const opacity5 = interpolate(frame, [157, 159], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const devicesProgress = interpolate(frame, [0, 120], [-100, 100]);

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					paddingTop: '5rem',
					opacity: 0,
				}}
			>
				<Title>Knowledge Workers</Title>
				<AltTitle style={{marginTop: '5rem'}}>
					<em>noun</em> &nbsp;People who are paid to think for a living
				</AltTitle>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-around',
						position: 'absolute',
						alignItems: 'flex-end',
						bottom: 0,
						left: 0,
						right: 0,
						width: '100%',
					}}
				>
					<img style={{height: '525px'}} src={doctor} alt="" />
					<img style={{height: '525px'}} src={lawyer} alt="" />
					<img style={{height: '525px'}} src={engineer} alt="" />
				</div>
			</AbsoluteFill>
			<AbsoluteFill style={{backgroundColor: 'var(--blue)'}}>
				<img
					style={{height: '100%', position: 'absolute', left: 0, top: 0}}
					src={scientist}
					alt=""
				/>
				<div
					style={{
						width: '47%',
						height: '100%',
						position: 'absolute',
						right: 0,
						top: 0,
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<svg
						width="800px"
						height="800px"
						viewBox="0 0 48.000015 48.000015"
						id="svg5"
						version="1.1"
						xml:space="preserve"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:svg="http://www.w3.org/2000/svg"
					>
						<defs id="defs2" />

						<g id="layer1" transform="translate(-98,-161)">
							<path
								d="m 115.21411,185.24711 c -0.25602,0.0697 -0.47383,0.23836 -0.60547,0.46875 l -4.78864,8.49889 c -0.27443,0.47996 -0.10732,1.09153 0.37305,1.36523 0.47995,0.27443 1.09152,0.10732 1.36523,-0.37305 l 4.78864,-8.49889 c 0.27443,-0.47996 0.10732,-1.09153 -0.37305,-1.36523 -0.23052,-0.13145 -0.50384,-0.16587 -0.75976,-0.0957 z"
								id="path13299"
								style={{
									color: '#000000',
									fill: '#808b9b',
									fillOpacity: '1',
									fillRule: 'evenodd',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeMiterlimit: '4.1',
									clipPath: 'inset(0px 100% 0px 0px)',
								}}
							/>

							<path
								d="m 117.5752,184.63006 c -0.47681,-0.27805 -1.08874,-0.11721 -1.36719,0.35937 -0.27806,0.47681 -0.11721,1.08874 0.35937,1.36719 l 6.86692,3.74993 c 0.47732,0.27772 1.0894,0.11596 1.36718,-0.36133 0.27773,-0.47732 0.11596,-1.08939 -0.36132,-1.36718 z"
								id="path13301"
								style={{
									color: '#000000',
									fill: '#808b9b',
									fillOpacity: '1',
									fillRule: 'evenodd',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeMiterlimit: '4.1',
								}}
							/>

							<path
								d="m 131.42453,180.40422 c -0.4746,-0.28273 -1.08854,-0.12706 -1.37109,0.34765 l -5.09771,7.77811 c -0.28272,0.47461 -0.12705,1.08855 0.34766,1.37109 0.4746,0.28273 1.08854,0.12706 1.37109,-0.34765 l 5.09771,-7.77811 c 0.28272,-0.4746 0.12705,-1.08855 -0.34766,-1.37109 z"
								id="path13303"
								style={{
									color: '#000000',
									fill: '#808b9b',
									fillOpacity: '1',
									fillRule: 'evenodd',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeMiterlimit: '4.1',
								}}
							/>

							<path
								d="m 103,165.02344 c -0.55228,0 -1,0.44772 -1,1 V 204 c 6e-5,0.55226 0.44774,0.99994 1,1 h 15 c 0.55228,0 1,-0.44772 1,-1 0,-0.55228 -0.44772,-1 -1,-1 h -14 v -36.97656 c 0,-0.55228 -0.44772,-1 -1,-1 z M 122.16621,203 c -0.55229,0 -1,0.44772 -1,1 0,0.55228 0.44771,1 1,1 H 141 c 0.55228,0 1,-0.44772 1,-1 0,-0.55228 -0.44772,-1 -1,-1 z"
								id="path10364"
								style={{
									color: '#000000',
									fill: '#808b9b',
									fillOpacity: '1',
									fillRule: 'evenodd',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeMiterlimit: '4.1',
								}}
							/>

							<path
								d="m 112,196 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 z"
								id="path12623"
								style={{
									color: '#000000',
									fill: '#90EE90',
									fillOpacity: '1',
									fillRule: 'evenodd',
									strokeWidth: '2',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeMiterlimit: '4.1',
								}}
							/>

							<path
								d="m 118,185 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 z"
								id="path12617"
								style={{
									color: '#000000',
									fill: '#90EE90',
									fillOpacity: '1',
									fillRule: 'evenodd',
									strokeWidth: '2',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeMiterlimit: '4.1',
								}}
							/>

							<path
								d="m 126.91687,189.5509 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 z"
								id="path12611"
								style={{
									color: '#000000',
									fill: '#90EE90',
									fillOpacity: '1',
									fillRule: 'evenodd',
									strokeWidth: '2',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeMiterlimit: '4.1',
								}}
							/>

							<path
								d="m 141,174 c 0,4.41826 -3.58171,7.99998 -7.99998,7.99998 -4.41828,0 -8,-3.58172 -8,-7.99998 0,-4.41827 3.58172,-8 8,-8 4.41827,0 7.99998,3.58173 7.99998,8 z"
								id="path12563"
								style={{
									fill: '#f2a50c',
									fillOpacity: '1',
									fillRule: 'evenodd',
									stroke: 'none',
									strokeWidth: '2',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeMiterlimit: '4.1',
									strokeOpacity: '1',
								}}
							/>

							<path
								d="M 131.85156,166.08203 C 127.97734,166.63895 125,169.97166 125,174 c 0,3.46698 2.20655,6.41695 5.29102,7.52734 3.87129,-0.55948 6.84765,-3.88976 6.84765,-7.91601 0,-3.46571 -2.20443,-6.41795 -5.28711,-7.5293 z"
								id="path19306"
								style={{
									fill: '#f7c63d',
									fillOpacity: '1',
									fillRule: 'evenodd',
									stroke: 'none',
									strokeWidth: '2',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeMiterlimit: '4.1',
									strokeOpacity: '1',
								}}
							/>

							<path
								d="m 133,167.73828 a 1.0057675,0.9942576 0 0 0 -1.00586,0.99609 v 0.86328 c -1.09065,0.39442 -1.89258,1.40627 -1.89258,2.60938 0,1.55136 1.33186,2.78711 2.89844,2.78711 0.52508,0 0.88867,0.36923 0.88867,0.79883 0,0.42962 -0.3636,0.79882 -0.88867,0.79882 -0.52507,0 -0.88672,-0.3692 -0.88672,-0.79882 a 1.0057675,0.9942576 0 0 0 -1.00586,-0.99414 1.0057675,0.9942576 0 0 0 -1.00586,0.99414 c 0,1.20312 0.80193,2.21497 1.89258,2.60937 v 0.86328 a 1.0057675,0.9942576 0 0 0 1.00586,0.9961 1.0057675,0.9942576 0 0 0 1.00586,-0.9961 v -0.86328 c 1.09065,-0.3944 1.89453,-1.40625 1.89453,-2.60937 0,-1.55135 -1.33381,-2.78711 -2.90039,-2.78711 -0.52508,0 -0.88672,-0.3692 -0.88672,-0.79883 0,-0.42961 0.36163,-0.79883 0.88672,-0.79883 0.52508,0 0.88867,0.36922 0.88867,0.79883 a 1.0057675,0.9942576 0 0 0 1.00586,0.99414 1.0057675,0.9942576 0 0 0 1.00586,-0.99414 c 0,-1.20312 -0.80388,-2.21497 -1.89453,-2.60938 v -0.86328 A 1.0057675,0.9942576 0 0 0 133,167.73828 Z"
								id="path12565"
								style={{
									color: '#000000',
									fill: '#808b9b',
									fillOpacity: '1',
									fillRule: 'evenodd',
									stroke: 'none',
									strokeWidth: '0.999996',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeMiterlimit: '4.1',
									strokeOpacity: '1',
								}}
							/>
						</g>
					</svg>
				</div>
			</AbsoluteFill>
		</>
	);
};
