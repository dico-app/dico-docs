<template>
	<div class="prose dark:prose-dark">
		<div class="nuxt-content-highlight">
			<pre
				class="language-bash line-numbers"
			><code>dico login {{token}}</code></pre>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			token: "<token>"
		};
	},
	mounted() {
		this.maybeGetToken();
	},
	methods: {
		async maybeGetToken() {
			const response = await fetch(`https://api.dico.app/v1/manage/token/pat`, {
				method: "GET",
				credentials: "include"
			});

			if (!response.ok) {
				if (response.status !== 401) {
					console.error(response);
				}
			} else {
				const json = await response.json();

				if (json.data.token) {
					this.token = json.data.token;
				} else {
					console.error(json);
				}
			}
		}
	}
};
</script>
