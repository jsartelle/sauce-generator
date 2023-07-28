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
			let value = data[type].find(
				(keyword) => keyword.name.toLowerCase() === override.toLowerCase(),
			)
			if (!value) {
				value = data[type].find((keyword) =>
					keyword.name.toLowerCase().startsWith(override.toLowerCase()),
				)
			}
			if (value) {
				if (type === 'prefix') prefix = value
				else suffix = value
			}
		}
	}

	let toddMode = false
	let angle = 0
	const angleMin = 2,
		angleMax = 5
	$: {
		const value = toddMode ? Math.random() * (angleMax - angleMin) + angleMin : 0
		angle = Math.random() < 0.5 ? -value : value
	}
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

	<a href="https://cwa-union.org/join-union/how-organize" target="_blank">NSFW DO NOT CLICK AT WORK</a>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Geologica:wght@700&display=swap');

	.container {
		transform: rotateZ(var(--angle));
	}

	.sauce {
		font-family: 'Geologica', sans-serif;
		font-size: calc(var(--font-size) * 4);
		font-weight: bold;
		white-space: nowrap;
		text-transform: uppercase;
		text-shadow: -1px -1px 0 var(--color), 1px -1px 0 var(--color), -1px 1px 0 var(--color),
			1px 1px 0 var(--color);
	}
</style>
