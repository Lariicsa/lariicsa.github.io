<!-- @format -->
<script setup>
	import AppButton from "@/components/AppButton.vue";

	const emit = defineEmits(["toggleButton"]);
	const toggleButton = () => {
		emit("toggleButton");
	};

	defineProps({
		menuItems: {
			type: Array,
			default: () => [],
		},
		isOpen: {
			type: Boolean,
			default: false,
		},
	});
</script>
<template>
	<div
		@click="toggleButton"
		class="mobileMenu w-full h-full fixed z-50 top-0 right-0 bg-[#000000]/70 transition duration-200 ease-in-out"
		:class="isOpen ? 'translate-x-0' : 'translate-x-full'">
		<div
			class="bg-[#353d47] text-[#e0e0e0] absolute h-full px-[24px] pt-[72px] w-[80%] right-0">
			<div
				class="absolute w-[32px] h-[32px] right-[32px] top-[32px] active:text-[#81B2F6]">
				<font-awesome-icon
					icon="fa-solid fa-circle-xmark"
					class="w-full h-full text-white active:text-[#81B2F6]" />
			</div>
			<div class="flex flex-col h-full w-full">
				<ul class="w-full p-0">
					<li
						v-for="item in menuItems"
						class="w-full text-[18px] py-[16px] text-[#f0f0f0] my-[24px] border border-x-0 border-t-0 border-b-[#51576E] border-dotted">
						<a :href="item.link">{{ item.name }}</a>
					</li>
				</ul>
				<AppButton
					class="mr-auto"
					:isLink="true"
					link="resume_Larissa_Avila.pdf"
					color="blue"
					size="md"
					>Resume</AppButton
				>
			</div>
		</div>
	</div>
</template>
<style>
	.mobileMenu {
		-webkit-overflow-scrolling: touch;
	}
</style>
