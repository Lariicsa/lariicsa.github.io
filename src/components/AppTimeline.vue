<!-- @format -->

<script setup>
	import { ref, onMounted } from "vue";

	defineProps({
		currentHeight: {
			type: String,
			default: "30",
		},
	});

	const expandDivRef = ref(null);

	const onScroll = () => {
		const tlHeight = expandDivRef.value.offsetHeight;

		console.log("expandDivRef", tlHeight);
	};

	onMounted(() => {
		//	window.addEventListener("scroll", onScroll, { passive: true });
		//	onScroll();
	});
</script>
<template>
	<div
		ref="expandDivRef"
		class="flex flex-grow w-[4px] h-auto bg-gradient-to-b from-[#F8B9EE] to-[#FFF0CB] mr-[160px] relative"></div>
</template>
