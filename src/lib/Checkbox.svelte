<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { statusFilters } from './stores.ts';
	import { mineralFilters } from './stores.ts';
	import { companyFilters } from './stores.ts';

	export let id: string, checked: boolean, label: string, value: string, name: string;

	afterUpdate(() => {
		if (name === 'status') {
			if (checked && !$statusFilters.includes(value)) {
				statusFilters.update((filters) => [...filters, value]);
			} else if (!checked && $statusFilters.includes(value)) {
				statusFilters.update((filters) => filters.filter((filter) => filter !== value));
			}
		} else if (name === 'mineral') {
			if (checked && !$mineralFilters.includes(value)) {
				mineralFilters.update((filters) => [...filters, value]);
			} else if (!checked && $mineralFilters.includes(value)) {
				mineralFilters.update((filters) => filters.filter((filter) => filter !== value));
			}
		} else if (name === 'company') {
			if (checked && !$companyFilters.includes(value)) {
				companyFilters.update((filters) => [...filters, value]);
			} else if (!checked && $companyFilters.includes(value)) {
				companyFilters.update((filters) => filters.filter((filter) => filter !== value));
			}
		}
	});
</script>

<label for={value}>
	<input type="checkbox" {name} {id} bind:checked />
	<span class="custom-checkbox {checked ? 'checked' : ''}" />
	{label}
</label>

<style>
	label {
		position: relative;
		cursor: pointer;
		padding-left: 25px; /* Space for custom checkbox */
		line-height: 20px; /* Match the height of the custom checkbox */
		font-size: 12px;
		text-transform: uppercase;
	}

	input[type='checkbox'] {
		opacity: 0;
		position: absolute;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	.custom-checkbox {
		position: absolute;
		top: 15%;
		left: 0;
		height: 10px;
		width: 10px;
		border-radius: 2px;
		border: 2px solid currentColor;
	}

	.custom-checkbox.checked {
		background-color: currentColor;
	}
</style>
