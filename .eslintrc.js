module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'vue/no-multiple-template-root': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': [
			2,
			{
				ignore: ['^@/'],
			},
		],
	},
}
