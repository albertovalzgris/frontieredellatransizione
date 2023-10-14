<script lang="ts">
	import type { svgData } from './utils.ts';
	import { formatDate } from './utils.ts';
	export let name: string,
		status: string,
		svg: svgData,
		start: string,
		end: string,
		company: string,
		minerals: string,
		documents: string;

	let status_color: string;

	function setColor(status: string) {
		let color: string;
		switch (status) {
			case 'Permesso di ricerca':
				color = '#E5FC59';
				break;
			case 'Istanza di permesso di ricerca':
				color = '#5DEFBF';
				break;
			case 'Istanza archiviata':
				color = '#D9D9D9';
				break;

			default:
				color = '#E5FC59';
				break;
		}
		return color;
	}

	$: status_color = setColor(status);
</script>

<div class="tooltip" style="--feature-color: {status_color}">
	<div class="tooltip-section centered">
		<h2>{name}</h2>
	</div>
	<hr />
	<div class="tooltip-section centered">
		<h3>{status}</h3>
		<div class="svg-wrapper">
			<svg viewBox="0 0 {svg.viewBoxWidth} {svg.viewBoxHeight}">
				<path d={svg.pathData} />
			</svg>
		</div>
	</div>
	<hr />
	<div class="tooltip-section" id="date">
		<div id="date-start">
			<h3>Inizio</h3>
			<p>{formatDate(start)}</p>
		</div>
		<div id="date-end">
			<h3>Scadenza</h3>
			<p>{formatDate(end)}</p>
		</div>
	</div>
	<hr />
	<div class="tooltip-section">
		<h3>Titolare</h3>
		<p>{company}</p>
	</div>
	<hr />
	<div class="tooltip-section">
		<h3>Minerali</h3>
		<p>{minerals}</p>
	</div>

	<div class="tooltip-section centered">
		<a href={documents} target="_blank" rel="noopener noreferrer">Vai alla documentazione</a>
	</div>
</div>

<style>
	.tooltip {
		background-color: hsla(18, 12%, 39%, 0.6);
		border-radius: 20px;
		padding: 24px;
		grid-column: 3;
		pointer-events: all;
		height: fit-content;
		margin-top: auto;
		color: var(--feature-color);
	}

	.centered {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tooltip-section > h2 {
		font-size: 12px;
		font-weight: 700;
		position: relative;
	}

	.tooltip-section > h3,
	.tooltip-section > div > h3 {
		font-size: 8px;
		font-weight: 700;
		margin-bottom: 0;
	}

	.tooltip-section > p,
	.tooltip-section > div > p {
		font-size: 12px;
		font-weight: 500;
		margin-top: 6px;
	}

	.tooltip-section:last-child {
		margin-top: 24px;
	}

	#date {
		display: flex;
		flex-direction: row;
	}

	#date > div > p {
		text-transform: lowercase;
	}

	#date > * {
		width: 50%;
	}

	#date-end {
		margin-left: 12px;
	}

	a {
		text-transform: uppercase;
		font-weight: 500;
		font-size: 12px;
		color: var(--feature-color);
	}

	.svg-wrapper {
		margin: 24px;
		width: 100%;
	}

	svg {
		max-height: 125px;
		display: block;
		margin: auto;
		fill: var(--feature-color);
	}

	hr {
		border: 1px solid currentColor;
		width: 100%;
		margin: 0;
	}
</style>
