import data from '$lib/assets/data.json'

export const ssr = false

const { prefix, suffix } = data

export function load() {
	return { prefix, suffix }
}
