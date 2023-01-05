module.exports = {
	semi: false,
	singleQuote: true,
	trailingComma: 'none',
	arrowParens: 'avoid',

	plugins: ['@trivago/prettier-plugin-sort-imports'],
	importOrder: ['^@/(.*)$', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true
}
