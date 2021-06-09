import Vue from "vue";
import VueGtag from "vue-gtag";

export default async ctx => {
	if (!ctx.$config.GTAG_ID) {
		return;
	}

	Vue.use(VueGtag, { config: { id: ctx.$config.GTAG_ID } });
};
