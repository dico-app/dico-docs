import { withDocus } from "docus";

export default withDocus({
	rootDir: __dirname,
	plugins: ["~/plugins/gtag.client"],
	generate: {
		fallback: true
	},
	publicRuntimeConfig: {
		GTAG_ID: process.env.GTAG_ID
	}
});
