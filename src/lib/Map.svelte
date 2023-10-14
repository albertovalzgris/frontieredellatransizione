<script lang="ts">
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';
	import { filterExpression, featureData, aboutVisible } from './stores.ts';
	import type { MapboxGeoJSONFeature } from 'mapbox-gl';

	export let mapData: any;

	let map: mapboxgl.Map;

	mapboxgl.accessToken =
		'pk.eyJ1IjoiNjAwbXQiLCJhIjoiY2tqZnNvdXB0OHVvczMxcWowZ29iNnowYiJ9.gPVHgS1CdbzW0Hig733jxw';

	onMount(() => {
		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/600mt/clftmhyi800af01t6as145hiq',
			center: [11.539481, 43.624513],
			zoom: 6.7
		});

		map.setMinZoom(5.2);

		//////TODO: TEMPORARY FIX, REMOVE LAYER FROM MAPBOX STUDIO LATER////////
		map.on('load', () => {
			map.removeLayer('frontiere-assoluto-57d40r');
			map.removeLayer('frontiere-assoluto-57d40r copy');
		});
		///////////////////////////////////////////////////////////////////////

		mapData.features.forEach((feature: MapboxGeoJSONFeature, index: number) => {
			feature.id = index;
		});

		map.on('load', () => {
			map.addSource('frontiere', {
				type: 'geojson',
				data: mapData
			});

			map.addLayer({
				id: 'frontiere-fill',
				type: 'fill',
				source: 'frontiere',
				paint: {
					'fill-color': [
						'match',
						['get', 'Stato'],
						'Permesso di ricerca',				'#E5FC59',
						'Istanza di permesso di ricerca',	'#5DEFBF',
						'Istanza archiviata',				'#D9D9D9',
															'#E5FC59' //Default
					],
					'fill-opacity': 0.5
				}
			});

			map.addLayer({
				id: 'frontiere-stroke',
				type: 'line',
				source: 'frontiere',
				paint: {
					'line-color': [
						'match',
						['get', 'Stato'],
						'Permesso di ricerca',				'#E5FC59',
						'Istanza di permesso di ricerca',	'#5DEFBF',
						'Istanza archiviata',				'#D9D9D9',
															'#E5FC59' //Default
					],
					'line-opacity': 1,
					'line-width': 2
				}
			});

			filterExpression.subscribe((expression) => {
				map.setFilter('frontiere-fill', expression);
				map.setFilter('frontiere-stroke', expression);
			});

			map.on('mouseenter', 'frontiere-fill', function () {
				map.getCanvas().style.cursor = 'pointer';
			});

			map.on('mouseleave', 'frontiere-fill', function () {
				map.getCanvas().style.cursor = ''; 
			});

			//TODO: I am taking the first feature because i can only display one tooltip at a time
			//      check what the ordering logic is and change this accordingly
			map.on('click', (e) => {
				const features = map.queryRenderedFeatures(e.point);
				if (!features.length || features[0].source != 'frontiere') featureData.set(null);
				const selectedFeature = mapData.features.find(
					(feature: MapboxGeoJSONFeature) => feature.id === features[0].id
				);
				featureData.set(selectedFeature);
			});

			aboutVisible.subscribe((value) => {
				if (value === true) {
					map.getCanvas().style.pointerEvents = 'none';
				} else {
					map.getCanvas().style.pointerEvents = 'all';
				}
			});
		});
	});
</script>

<div id="map" />

<style>
	#map {
		position: absolute;
		margin: 0;
		width: 100%;
		height: 100%;
	}
</style>
