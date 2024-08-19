<!-- @format -->

<script setup>
	import { computed, ref } from "vue";

	const color = computed(() => {
		return {
			peach: "bg-gradient-to-r from-[#F89E7B] to-[#F58C64] text-[#373737]",
			pink: "bg-gradient-to-r from-[#E5A9B7] to-[#CDA9E5] text-[#373737]",
			blue: "bg-[#81B2F6] text-white",
		}[props.color];
	});

	const size = computed(() => {
		return {
			lg: "h-[72px] w-auto max-w-[272px] px-[54px] text-[32px]",
			sm: "h-[24px] w-auto px-[12px] text-[14px]",
		}[props.size];
	});

	const props = defineProps({
		color: {
			type: String,
			default: "peach",
		},
		size: {
			type: String,
			default: "lg",
		},
	});
</script>
<template>
	<button class="border-none rounded-full active:saturate-200 sm:hover:saturate-150" :class="`${color} ${size}`">
		<slot></slot>
	</button>
</template>
