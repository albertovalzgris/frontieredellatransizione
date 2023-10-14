<script lang="ts">
	import type { FeatureCollection, Feature, MultiPolygon, Polygon } from 'geojson';
	import { landingVisible } from './stores';
	import { sortByAspectRatio, renderSVGfromFeature } from './utils';
	import { onMount } from 'svelte';

	export let data: FeatureCollection<Polygon | MultiPolygon>;

	let innerWidth: number = 0,
		innerHeight: number = 0;

	let [widePolygons, tallPolygons]: [
		Feature<Polygon | MultiPolygon>[],
		Feature<Polygon | MultiPolygon>[]
	] = sortByAspectRatio(data);

	let landingPageVisible = true;
	landingVisible.subscribe((value) => (landingPageVisible = value));
	let svgContainer: HTMLDivElement;

	onMount(() => {
		let polygonPool = innerWidth >= innerHeight ? widePolygons : tallPolygons;

		let renderQueue = polygonPool;

		function renderLoop() {
			if (!landingPageVisible) {
				return;
			}

			let feature = renderQueue[0];
			let svgData = renderSVGfromFeature(feature);

			let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

			svg.setAttribute('viewBox', `0 0 ${100} ${100}`);
			svg.setAttribute('height', '100%');
			svg.setAttribute('stroke-width', '.1');
			svg.setAttribute('stroke-linejoin', 'round');
			svg.setAttribute('stroke-opacity', '1');
			svg.setAttribute('stroke', '#E5FC59');
			svg.setAttribute('fill', 'none');

			svg.style.position = 'absolute';
			svg.style.transform = 'translate(-50%, -50%)';


			path.setAttribute('d', svgData.pathData);
			
			path.style.transformOrigin = 'center';
			path.style.scale = '0.95';


			svg.appendChild(path);

			let svgs = svgContainer.querySelectorAll('svg');

			if (svgs.length > 0) {
				svgContainer.insertBefore(svg, svgContainer.firstChild);
				svgs.forEach((svg) => {
					if (svg.getAttribute('stroke-opacity') != null) {
						let opacity = parseFloat(svg.getAttribute('stroke-opacity') as string);
						opacity -= 0.2;
						opacity = Math.round(opacity * 10) / 10;
						svg.setAttribute('stroke-opacity', opacity.toString());
						if (opacity <= 0) {
							svgContainer.removeChild(svg);
						}
					}
				});
			} else {
				svgContainer.appendChild(svg);
			}

			const bbox = path.getBBox();
			const centerX = (100 - bbox.width) / 2 - bbox.x;
			const centerY = (100 - bbox.height) / 2 - bbox.y;

			path.setAttribute('transform', `translate(${centerX}, ${centerY})`);

			renderQueue.push(renderQueue.shift() as Feature<Polygon | MultiPolygon>);

			setTimeout(renderLoop, 1000);
		}

		renderLoop();
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div id="landing-page">
	<div class="animation-wrapper">
		<div class="svg-container" bind:this={svgContainer} />
	</div>
	<div class="copy-container">
		<h1>Frontiere della transizione energetica</h1>
		<h2>Database sui permessi di ricerca<br />per materie prime critiche</h2>
		<div class="button-wrapper">
			<button
				on:click={() => {
					landingVisible.set(false);
				}}>Entra</button
			>
		</div>
	</div>
</div>

<style>
	#landing-page {
		position: absolute;
		z-index: 1000;
		margin: 0;
		width: 100%;
		height: 100%;
		background-color: var(--background-85);
		display: grid;
		justify-content: center;
		align-content: center;
	}

	.copy-container {
		z-index: 1;
		display: grid;
		justify-content: center;
		align-content: center;
		text-align: center;
	}

	.animation-wrapper {
		height: 100%;
		width: 100%;
		position: absolute;
		display: grid;
		justify-content: center;
		align-content: center;
	}

	.svg-container {
		width: 100%;
		height: 100%;
		z-index: -1;
		margin: auto;
	}

	h1,
	h2 {
		margin: 0;
		font-size: 20px;
		line-height: 26px;
		font-family: 'IBM Plex Mono', monospace;
	}

	h2 {
		font-weight: 500;
		margin-bottom: 48px;
	}

	button {
		color: var(--background-85);
		background-color: var(--primary);
	}
</style>
