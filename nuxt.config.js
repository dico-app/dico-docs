import { withDocus } from "docus";

export default withDocus({
	rootDir: __dirname,
	css: [
		"@fontsource/inter/300.css",
		"@fontsource/inter/400.css",
		"@fontsource/inter/600.css",
		"@fontsource/inter/700.css",
		"@fontsource/inter/800.css",
		"@fontsource/manrope/800.css",
		"@fontsource/manrope/700.css",
		"@fontsource/manrope/600.css",
		"@fontsource/inconsolata/600.css"
	],
	plugins: ["~/plugins/gtag.client"],
	generate: {
		fallback: true
	},
	publicRuntimeConfig: {
		GTAG_ID: process.env.GTAG_ID
	}
});
