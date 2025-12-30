import wordpress from '@wordpress/eslint-plugin';

export default [
	{
		files: ['src/**/*.js'],

		plugins: {
			'@wordpress': wordpress,
		},

		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				window: 'readonly',
				document: 'readonly',
			},
		},

		rules: {
			...wordpress.configs.recommended.rules,
			'prettier/prettier': 'off',
		},
	},
];
