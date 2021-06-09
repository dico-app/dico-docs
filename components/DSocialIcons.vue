<template>
	<div class="flex flex-col sm:flex-row space-x-3 items-end">
		<dico-button as="a" href="https://dico.app" theme="reversed-primary">
			Back to dico.app ->
		</dico-button>
		<dico-button
			as="a"
			href="https://ui.dico.app"
			theme="primary"
			class="hidden sm:block"
		>
			Dashboard
		</dico-button>
	</div>
</template>

<script>
export default {};
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
