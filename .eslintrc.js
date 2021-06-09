module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: "babel-eslint"
	},
	extends: ["plugin:vue/recommended", "plugin:prettier/recommended"],
	plugins: [],
	rules: {
		"no-console": ["warn", { allow: ["log", "info", "warn", "error"] }],
		"no-debugger": "warn",
		"no-undef": 0,
		curly: "error",
		"prefer-const": "error",
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" }
		]
	}
};
