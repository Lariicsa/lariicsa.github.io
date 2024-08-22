<!-- @format -->

<script setup>
	import { ref, defineProps } from "vue";

	const props = defineProps({
		show: {
			type: Boolean,
			default: false,
		},
	});

	const isShown = ref(props.show);
</script>
<template>
	<Transition :duration="550" name="nested">
		<div
			v-if="props.show"
			class="flex w-[156px] h-[48px] justify-center items-center bg-[#C3D994] text-[16px] font-medium text-[#373737] rounded-md shadow-md absolute bottom-[80px] left-auto">
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
