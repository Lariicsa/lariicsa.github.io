<!-- @format -->

<script setup>
	import { defineProps } from "vue";

	const props = defineProps({
		show: {
			type: Boolean,
			default: false,
		},
	});
</script>
<template>
	<Transition :duration="450" name="nested">
		<div
			v-if="props.show"
			class="flex w-full lg:w-[156px] h-[48px] justify-center items-center bg-[#C3D994] text-[16px] font-medium text-[#373737] rounded-sm shadow-md fixed bottom-0 lg:bottom-[64px] left-0 lg:left-auto z-[5]">
			Copied e-Mail
		</div>
	</Transition>
</template>

<style>
	.nested-enter-active,
	.nested-leave-active {
		transition: all 0.3s ease-in-out;
	}
	/* delay leave of parent element */
	.nested-leave-active {
		transition-delay: 0.25s;
	}

	.nested-enter-from,
	.nested-leave-to {
		transform: translateY(30px);
		opacity: 0;
	}

	/* we can also transition nested elements using nested selectors */
</style>
