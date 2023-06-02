interface Keyword {
	name: string
	color: string
}

interface KeywordType {
	base: Keyword[]
	extended: Keyword[]
}

interface KeywordMap {
	prefixes: KeywordType
	suffixes: KeywordType
}

const prefixBase = [
	{ name: 'buffa', color: '#dfc864' },
	{ name: 'honey', color: '#feb006' },
	{ name: 'kra', color: '#c60321' },
	{ name: 'mayo', color: '#fc5779' },
	{ name: 'mayo', color: '#fcc803' },
	{ name: 'mayo', color: '#fb8b39' },
	{ name: 'ket', color: '#d00928' },
	{ name: 'h', color: '#d9e0ec' },
	{ name: 'wasab', color: '#d3efc8' },
	{ name: 'tar', color: '#dcc5cc' },
	{ name: 'may', color: '#838381' },
]

const suffixBase = [
	{ name: 'ranch', color: '#69b9ec' },
	{ name: 'racha', color: '#e63300' },
	{ name: 'nch', color: '#62b3e8' },
	{ name: 'chup', color: '#c6010b' },
	{ name: 'must', color: '#f2ad08' },
	{ name: 'chili', color: '#f37d25' },
	{ name: 'cue', color: '#7c2e26' },
	{ name: 'anch', color: '#dfc864' },
	{ name: 'ioli', color: '#dfc864' },
	{ name: 'chup', color: '#dfc864' },
	{ name: 'oreo', color: '#010101' },
]

const keywords: KeywordMap = {
	prefixes: {
		base: prefixBase,
		extended: [
			...prefixBase,
			{ name: 'verde', color: '#4ba52f' },
			{ name: 'mild', color: '#eeb646' },
			{ name: 'hot', color: '#ef8a35' },
			{ name: 'fire!', color: '#da3f22' },
			{ name: 'diablo', color: '#1c1918' },
			{ name: 'ed', color: '#bc7c58' },
			{ name: 'soy', color: '#d3302a' },
			{ name: 'taco', color: '#e67040' },
			{ name: 'wild', color: '#bc4127' },
			{ name: "blazin'", color: '#a5252b' },
			{ name: 'bourbon', color: '#571c09' },
			{ name: 'peanut', color: '#e9b764' },
			{ name: 'tangy', color: '#e3502d' },
			{ name: 'chipotle', color: '#bc4b55' },
			{ name: 'szechuan', color: '#dd8f8c' },
			{ name: 'honey', color: '#ecca4b' },
			{ name: 'sweet', color: '#80b259' },
			{ name: 'spicy', color: '#f3c249' },
			{ name: 'parmesan', color: '#d4d659' },
			{ name: 'creamy', color: '#54b9db' },
			{ name: 'mango', color: '#e3ac42' },
			{ name: 'tomato', color: '#af312d' },
			{ name: 'ganache', color: '#552d18' },
			{ name: 'cran', color: '#f34549' },
			{ name: 'pink', color: '#d28698' },
			{ name: 'ranch', color: '#69b9ec' },
			{ name: 'tab', color: '#008860' },
			{ name: 'sweet baby', color: '#014a83' },
			{ name: 'her', color: '#3c1b24' },
			{ name: 'cara', color: '#bc6b33' },
			{ name: 'hollan', color: '#ede0c0' },
			{ name: 'gra', color: '#c2874f' },
			{ name: 'sweet', color: '#68b728' },
			{ name: 'worcester', color: '#673743' },
			{ name: 'al', color: '#ead7c3' },
			{ name: 'A.', color: '#d72d30' },
			{ name: 'apple', color: '#3c963f' },
			{ name: "Terry's Chocolate Orange", color: '#e6bc2f' },
			{ name: 'mari', color: '#e0410a' },
			{ name: 'teri', color: '#7f1f09' },
			{ name: 'asian', color: '#e1a048' },
			{ name: 'caribbean', color: '#e6a14c' },
			{ name: 'hab', color: '#76852b' },
			{ name: 'thai', color: '#e36c2e' },
			{ name: 'dulce', color: '#d1994c' },
		],
	},
	suffixes: {
		base: suffixBase,
		extended: [
			...suffixBase,
			{ name: 'BBQ', color: '#983a23' },
			{ name: 'garlic', color: '#f0ebdc' },
			{ name: 'alo', color: '#dfc864' },
			{ name: 'asco', color: '#ed4940' },
			{ name: "ray's", color: '#e5182c' },
			{ name: "shey's", color: '#fd718d' },
			{ name: 'mel', color: '#bc6b33' },
			{ name: 'daise', color: '#ede0c0' },
			{ name: 'vy', color: '#c2874f' },
			{ name: "'n sour", color: '#68b728' },
			{ name: 'shire', color: '#e3caae' },
			{ name: 'fredo', color: '#ead7c3' },
			{ name: '1.', color: '#0655a4' },
			{ name: 'sauce', color: '#0b6130' },
			{ name: 'mayo', color: '#ffffff' },
			{ name: 'nara', color: '#62773f' },
			{ name: 'yaki', color: '#7f1f09' },
			{ name: 'zing', color: '#773431' },
			{ name: 'jerk', color: '#76351c' },
			{ name: 'añero', color: '#e2792e' },
			{ name: 'curry', color: '#87533a' },
			{ name: 'de leche', color: '#8c4819' },
		],
	},
} as const

export default keywords
