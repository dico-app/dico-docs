<!-- HEALTH:UNKNOWN dico-button -->
<!-- eslint-disable vue/no-v-html -->
<template>
	<component
		:is="as"
		class="dicoButton inline-block cursor-pointer"
		:class="{
			'text-button-small px-4 py-2 rounded': !large,
			'text-button-large px-6 py-4 rounded-lg': large,

			// Button
			'bg-grey-200 text-black': theme === 'default',
			'bg-malibu text-white': theme === 'primary',
			'bg-black text-white': theme === 'black',

			// Reversed
			'text-malibu': theme === 'reversed-primary',
			'hover:bg-malibu hover:bg-opacity-30 focus:bg-malibu focus:bg-opacity-30 transition-bg transition-300':
				['reversed-default', 'reversed-primary'].includes(theme)
		}"
	>
		<slot />
	</component>
</template>

<script>
export default {
	props: {
		as: {
			type: String,
			required: false,
			default: "span"
		},
		large: {
			type: Boolean,
			required: false,
			default: false
		},
		theme: {
			type: String,
			required: false,
			default: "default"
		}
	}
};
</script>

<style scoped>
.text-button-small {
	@apply font-main font-semibold;
}
.text-button-large {
	@apply font-main font-semibold;
}
</style>
