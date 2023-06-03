<script lang="ts">
	import { page } from '$app/stores'
	import randomItem from 'random-item'

	export let data

	type Keyword = (typeof data.prefix)[0]
	let prefix: Keyword, suffix: Keyword

	function generate() {
		prefix = randomItem(data.prefix)
		suffix = randomItem(data.suffix)
	}
	generate()

	for (const type of ['prefix', 'suffix'] as const) {
		const override = $page.url.searchParams.get(type)
		if (override) {
			const value = data[type].find((keyword) =>
				keyword.name.toLowerCase().startsWith(override.toLowerCase()),
			)
			if (value) {
				if (type === 'prefix') prefix = value
				else suffix = value
			}
		}
	}

	let toddMode = false
	const minAngle = -5,
		maxAngle = 5
	$: angle = toddMode ? Math.random() * (maxAngle - minAngle) + minAngle : 0
</script>

<main class="container" style:--angle={angle + 'deg'}>
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

	.container {
		transform: rotateZ(var(--angle));
	}

	.sauce {
		font-family: 'Geologica', sans-serif;
		/* TODO auto size text */
		font-size: 100px;
		font-weight: bold;
		white-space: nowrap;
		text-transform: uppercase;
		text-shadow: -1px -1px 0 var(--color), 1px -1px 0 var(--color), -1px 1px 0 var(--color),
			1px 1px 0 var(--color);
	}
</style>
