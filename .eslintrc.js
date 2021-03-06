module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'import/no-unresolved': [
			2,
			{
				ignore: ['^@/'],
			},
		],
		'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.config.ts', '**/mocks/*.ts'] }],
	},
}
