<!-- @format -->
<script setup>
	const emit = defineEmits(["clickOnEnvelope"]);

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

	const clickOnEnvelope = () => {
		emit("clickOnEnvelope");
	};
</script>
<template>
	<div class="flex w-auto h-auto">
		<div class="w-[320px] flex justify-between items-center">
			<a
				v-for="item in contact"
				:href="item.link"
				target="_blank"
				class="w-[26px] h-[24px] sm:w-[40px] sm:h-[40px] text-[#E0E0E0] active:text-[#81B2F6] sm:hover:text-[#81B2F6]">
				<font-awesome-icon :icon="item.icon" class="w-full h-auto" />
			</a>
			<button
				@click="clickOnEnvelope()"
				class="h-auto w-auto underline text-[18px] text-[#E0E0E0] active:text-[#81B2F6] sm:hover:text-[#81B2F6]">
				lariicsa@gmail.com
			</button>
		</div>
	</div>
</template>
