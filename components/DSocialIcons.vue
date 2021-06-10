<template>
	<div class="flex flex-col sm:flex-row space-x-3 items-end">
		<dico-button as="a" href="https://dico.app" theme="reversed-primary">
			Back to dico.app ->
		</dico-button>
		<dico-button
			v-if="!isLoggedIn"
			as="a"
			href="https://ui.dico.app"
			theme="reversed-primary"
			class="hidden sm:block"
		>
			Login
		</dico-button>
		<dico-button
			v-if="!isLoggedIn"
			as="a"
			href="https://ui.dico.app"
			theme="primary"
			class="hidden sm:block"
		>
			Signup
		</dico-button>
		<dico-button
			v-if="isLoggedIn"
			as="a"
			href="https://ui.dico.app/dico"
			theme="primary"
			class="hidden sm:block"
		>
			Dashboard
		</dico-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isLoggedIn: false
		};
	},
	mounted() {
		this.checkIsLoggedIn();
	},
	methods: {
		async checkIsLoggedIn() {
			const response = await fetch(`https://api.dico.app/v1/auth/whoami`, {
				method: "GET",
				credentials: "include"
			});

			if (!response.ok) {
				if (response.status !== 401) {
					console.error(response);
				}
			} else {
				const json = await response.json();

				if (json.status === 200) {
					this.isLoggedIn = true;
				} else {
					console.error(json);
				}
			}
		}
	}
};
</script>

<style>
html {
	font-family: Inter, "-apple-system", "BlinkMacSystemFont", '"Segoe UI"',
		"Helvetica", "Arial", "sans-serif", '"Apple Color Emoji"',
		'"Segoe UI Emoji"', '"Segoe UI Symbol"';
}

body .sticky .flex .xl\:w-64 {
	width: auto !important;
}

@media (max-width: 1023px) {
	body aside > .h-full > .fixed:last-of-type {
		width: 100% !important;
	}
}
</style>
