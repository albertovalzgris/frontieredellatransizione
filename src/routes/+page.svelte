<script lang="ts">
	import Map from '$lib/Map.svelte';
	import Header from '$lib/Header.svelte';
	import About from '$lib/About.svelte';
	import Interface from '$lib/Interface.svelte';
	import LandingPage from '$lib/LandingPage.svelte';
	import type { FeatureCollection, Polygon, MultiPolygon } from 'geojson';
	import { aboutVisible, landingVisible } from '$lib/stores';
	import jsonData from '$lib/data/data.json';

	let landingPageVisible = true;
	landingVisible.subscribe((value) => (landingPageVisible = value));

	let data = jsonData as FeatureCollection<Polygon | MultiPolygon>;
</script>

<Map mapData={data} />
<Header />
<Interface {data} />
{#if $aboutVisible}
	<About />
{/if}
{#if landingPageVisible}
	<LandingPage {data} />
{/if}
