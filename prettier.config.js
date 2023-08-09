module.exports = {
	semi: false,
	singleQuote: true,

	plugins: ['@trivago/prettier-plugin-sort-imports'],
	importOrder: ['^@/(.*)$', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true
}
