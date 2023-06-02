import data from '$lib/assets/data.js'

export const ssr = false

export function load() {
	return {
		prefixes: data.prefixes,
		suffixes: data.suffixes,
	}
}
