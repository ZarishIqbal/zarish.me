module.exports = {
	extends: ['next', 'prettier'],
	parser: '@typescript-eslint/parser',
	ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'] // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
}
