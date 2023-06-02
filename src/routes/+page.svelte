<script lang="ts">
	import randomItem from 'random-item'

	export let data

	type Keyword = (typeof data.prefixes.extended)[0]
	let prefix: Keyword, suffix: Keyword

	let extendedMode = true
	let toddMode = false

	let type: keyof typeof data.prefixes = 'extended'
	$: type = extendedMode ? 'extended' : 'base'

	function generate() {
		prefix = randomItem(data.prefixes[type])
		suffix = randomItem(data.suffixes[type])
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
		<input type="checkbox" role="switch" bind:checked={extendedMode} />
		<span>Extended Mode</span>
	</label>
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
		/* TODO fix weird text stroke artifacts */
		-webkit-text-stroke: 2px black;
	}
</style>
