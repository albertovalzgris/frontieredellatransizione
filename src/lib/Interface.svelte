<script lang="ts">
	import Filters from '$lib/Filters.svelte';
	import Tooltip from '$lib/Tooltip.svelte';

	import { tooltipData, aboutVisible } from '$lib/stores';

	import type { FeatureCollection } from 'geojson';

	export let data: FeatureCollection;

	let tooltipVisible = false;

	tooltipData.subscribe((value) => {
		if (value !== null) {
			tooltipVisible = true;
		}
	});

	aboutVisible.subscribe((value) => {
		if (value === true) {
			tooltipVisible = false;
		}
	});
</script>

<div id="interface">
	<Filters {data} />
	{#if $tooltipData && tooltipVisible}
		<Tooltip
			name={$tooltipData.name}
			status={$tooltipData.status}
			svg={$tooltipData.svg}
			start={$tooltipData.start}
			end={$tooltipData.end}
			company={$tooltipData.company}
			minerals={$tooltipData.minerals}
			documents={$tooltipData.documents}
		/>
	{/if}
</div>

<style>
	#interface {
		position: absolute;
		bottom: 0;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 3fr) minmax(0, 1fr);
		margin: 24px;
		margin-bottom: 36px;
		column-gap: 24px;
		pointer-events: none;
	}

	@media (max-width: 480px) {
		#interface {
			display: none;
		}
	}
</style>
