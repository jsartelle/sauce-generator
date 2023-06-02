<script>
	import randomItem from 'random-item'

	export let data
	const { prefixes, suffixes } = data
</script>

<div>
	<h1>
		<span>{randomItem(prefixes.extended).name}</span><span
			>{randomItem(suffixes.extended).name}</span
		>
	</h1>
</div>

<style>
	span {
		text-transform: uppercase;
	}
</style>
