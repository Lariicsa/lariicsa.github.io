<!-- @format -->
<script setup>
	import { defineEmits } from "vue";
	const emit = defineEmits(["clickOnEnvelope"]);
	const clickOnEnvelope = () => {
		emit("clickOnEnvelope");
	};

	const contact = [
		{
			icon: "fa-brands fa-linkedin",
			link: "https://www.linkedin.com/in/lariicsa",
		},
		{
			icon: "fa-brands fa-github",
			link: "https://github.com/Lariicsa",
		},
	];
</script>
<template>
	<footer
		class="flex w-full h-[56px] bg-gradient-to-r from-[#9494D2] to-[#ABB4FF] text-[#5252E1] fixed bottom-0 left-0 px-[16px] z-[4]">
		<div
			class="w-full max-w-[1280px] flex justify-between items-center mx-auto">
			<span class="text-[12px] sm:text-[16px]">Last update: August 2024</span>
			<div class="w-[124px] sm:w-[116px] flex justify-between items-center">
				<a
					v-for="item in contact"
					:href="item.link"
					class="border border-[#6C6CDC] rounded-full flex justify-center items-center w-[28px] h-[28px] active:saturate-200 sm:hover:saturate-200">
					<font-awesome-icon :icon="item.icon" class="w-[16px] h-auto" />
				</a>
				<button
					@click="clickOnEnvelope"
					class="border border-[#6C6CDC] rounded-full flex justify-center items-center w-[28px] h-[28px] active:saturate-200 sm:hover:saturate-200">
					<font-awesome-icon icon="fa-solid fa-envelope" />
				</button>
			</div>
		</div>
	</footer>
</template>
