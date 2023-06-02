import data from '$lib/assets/data.js'

export function load() {
	return {
		prefixes: data.prefixes,
		suffixes: data.suffixes,
	}
}
