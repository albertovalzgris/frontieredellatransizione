<script lang="ts">
	import Checkbox from './Checkbox.svelte';

	export let data: any;

	const uniqueStatuses: string[] = [
		...new Set(data.features.map((item: any) => item.properties['Stato']))
	].filter((status): status is string => typeof status === 'string');

	const uniqueMinerals: string[] = [
		...new Set(
			data.features.flatMap((item: any) =>
				item.properties['Minerali'].split(',').map((mineral: string) => mineral.trim())
			)
		)
	]
		.filter((mineral): mineral is string => typeof mineral === 'string')
		.sort((a, b) => a.length - b.length);

	const uniqueCompanies: string[] = [
		...new Set(data.features.map((item: any) => item.properties['Titolare']))
	].filter((company): company is string => typeof company === 'string');
</script>

<div id="filters">
	<div class="filter-section" id="filter-status">
		{#each uniqueStatuses as status}
			<Checkbox id={status} name="status" label={status} value={status} checked={true} />
		{/each}
	</div>

	<div class="filter-section" id="filter-material">
		<header>
			<h2>Materiali</h2>
			<hr />
		</header>
		<div class="checkbox-container">
			{#each uniqueMinerals as mineral}
				<Checkbox id={mineral} name="mineral" label={mineral} value={mineral} checked={true} />
			{/each}
		</div>
	</div>

	<div class="filter-section" id="filter-company">
		<header>
			<h2>Titolare</h2>
			<hr />
		</header>
		<div class="checkbox-container">
			{#each uniqueCompanies as company}
				<Checkbox id={company} name="company" label={company} value={company} checked={true} />
			{/each}
		</div>
	</div>
</div>

<style>
	#filters {
		margin-top: auto;
		max-width: auto;
		font-size: 12px;
		font-weight: 700;
		font-family: Helvetica, Arial, sans-serif;
		pointer-events: all;
	}

	h2 {
		font-size: 12px;
		margin: 0;
		margin-left: 12px;
		margin-top: 24px;
	}

	hr {
		border: 0;
		border-top: 2px solid #e5fc59;
	}

	.checkbox-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 12px;
		margin-left: 12px;
	}

	#filter-company > .checkbox-container {
		grid-template-columns: repeat(2, 1fr);
	}

	#filter-status {
		display: flex;
		flex-direction: column;
		margin-left: 12px;
	}

	#filter-status > :global(:nth-child(1)) {
		color: var(--acquamarine);
	}

	#filter-status > :global(:nth-child(3)) {
		color: var(--gray);
	}
</style>
