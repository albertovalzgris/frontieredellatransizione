import { writable, derived } from 'svelte/store';
import { renderSVGfromFeature } from './utils';
import type { Feature } from '@turf/helpers';
import type { MultiPolygon, Polygon } from 'geojson';
import type { MapboxGeoJSONFeature } from 'mapbox-gl';
export const statusFilters = writable<string[]>([]);
export const mineralFilters = writable<string[]>([]);
export const companyFilters = writable<string[]>([]);

export const filterExpression = derived(
	[statusFilters, mineralFilters, companyFilters],
	([$statusFilters, $mineralFilters, $companyFilters]) => {
		return [
			'all',
			[
				'match',
				['get', 'Stato'],
				...$statusFilters.flatMap((status: string) => [status, true]),
				false
			],
			[
				'any',
				...$mineralFilters.map((mineral) => [
					'!',
					['==', ['index-of', mineral, ['get', 'Minerali']], -1]
				])
			],
			[
				'match',
				['get', 'Titolare'],
				...$companyFilters.flatMap((company: string) => [company, true]),
				false
			]
		];
	}
);

export const featureData = writable(<MapboxGeoJSONFeature | null>{});

export const tooltipData = derived(featureData, ($featureData) => {
	if (!$featureData || !$featureData.properties || $featureData == null) return null;
	console.log($featureData);
	const svg = renderSVGfromFeature($featureData as Feature<Polygon | MultiPolygon>);
	return {
		name: $featureData.properties?.Nome ?? 'N/A',
		status: $featureData.properties?.Stato ?? 'N/A',
		svg: svg,
		start: $featureData.properties?.Inizio ?? 'N/A',
		end: $featureData.properties?.Scadenz ?? 'N/A',
		company: $featureData.properties?.Titolare ?? 'N/A',
		minerals: $featureData.properties?.Minerali ?? 'N/A',
		documents: $featureData.properties?.Documenti ?? 'N/A'
	};
});

export const aboutVisible = writable(<boolean>false);
export const landingVisible = writable(<boolean>true);
