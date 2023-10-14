<script lang="ts">
	import { aboutVisible } from './stores';

	let innerWidth: number = 0,
		innerHeight: number = 0;

	let copy = '';

	$: if (innerWidth > 480) {
		copy =
			"Questa carta interattiva permette di visualizzare i permessi di ricerca mineraria per materie prime critiche attualmente autorizzati o in fase di autorizzazione in Italia. Si propone come uno strumento informativo per indagare la dimensione estrattiva della transizione a forme di energia pulita e di proiettarne l'impatto reale sui territori.";
	} else {
		copy = 'Database sui permessi di ricerca<br>per materie prime critiche';
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<header>
	<h1>
		Frontiere della{#if innerWidth < 480}<br />{/if}Transizione Energetica
	</h1>
	<p>
		{@html copy}
	</p>
	<div class="button-wrapper">
		{#if !$aboutVisible}
			<button
				on:click={() => {
					aboutVisible.set(!$aboutVisible);
				}}>About</button
			>
		{/if}
	</div>
</header>

<style>
	header {
		position: absolute;
		top: 0;
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		padding: 0;
		margin: 24px;
		column-gap: 24px;
		pointer-events: none;
	}

	h1 {
		font-size: 18px;
		margin: 0;
	}

	p {
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 14px;
		margin: 0;
		text-transform: none;
		font-weight: 500;
		width: 60%;
	}

	.button-wrapper {
		display: flex;
		justify-content: flex-end;
	}

	button {
		color: var(--primary);
		background-color: var(--background-85);
		pointer-events: all;
	}

	@media (max-width: 480px) {
		header {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: calc(100% - 48px);
			height: calc(100% - 48px);
		}
		header > * {
			width: 100%;
			text-align: center;
		}
		.button-wrapper {
			display: flex;
			justify-content: center;
			margin-top: auto;
		}
	}
</style>
