<script lang="ts">
	import randomItem from 'random-item'

	export let data

	type Keyword = (typeof data.prefix)[0]
	let prefix: Keyword, suffix: Keyword

	let toddMode = false

	function generate() {
		prefix = randomItem(data.prefix)
		suffix = randomItem(data.suffix)
	}
	generate()
</script>

<main class="container" class:toddMode>
	<div class="sauce">
		<span style:color={prefix.color}>{prefix.name}</span><span style:color={suffix.color}
			>{suffix.name}</span
		>
	</div>

	<button on:click={generate}>CLICK FOR SAUCE</button>

	<label>
		<input type="checkbox" role="switch" bind:checked={toddMode} />
		<span>Todd Mode</span>
	</label>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Geologica:wght@700&display=swap');

	.toddMode {
		transform: rotateZ(2deg);
	}

	.sauce {
		font-family: 'Geologica', sans-serif;
		/* TODO auto size text */
		font-size: 100px;
		font-weight: bold;
		white-space: nowrap;
		text-transform: uppercase;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
	}
</style>
