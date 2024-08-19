<!-- @format -->
<script setup>
	import AppButton from "@/components/AppButton.vue";
	import Applogo from "./icons/Applogo.vue";

	defineProps({
		currenRoute: {
			type: String,
		},
	});

	const itemsMenu = [
		{
			name: "Home",
			link: "/",
			slug: "home",
		},
		{
			name: "Experience",
			link: "/experience",
			slug: "experience",
		},
		{
			name: "About",
			link: "/about",
			slug: "about",
		},
	];
</script>
<template>
	<nav
		class="w-full group flex justify-between items-center max-w-[1280px] h-[28px] rounded-full mt-[32px] mx-auto px-[24px] sm:px-0">
		<Applogo class="w-[120px] h-auto" />
		<font-awesome-icon
			icon="fa-solid fa-bars"
			class="w-[24px] h-auto text-[#E0E0E0] flex sm:hidden" />
		<div class="w-auto hidden sm:flex">
			<ul
				class="w-auto px-[24px] flex p-0 text-[16px] sm:text-[18px] font-medium">
				<li v-for="item in itemsMenu" class="mr-[24px]">
					<a
						:href="item.link"
						class="acive:text-[#81B2F6] sm:hovertext-[#81B2F6]"
						:class="
							item.slug === currenRoute ? 'text-[#81B2F6]' : 'text-[#e0e0e0]'
						"
						>{{ item.name }}</a
					>
				</li>
			</ul>
			<span class="bg-[#51576E] h-[24px] w-[2px] mx-[24px]"></span>
			<AppButton color="blue" size="sm">Resume</AppButton>
		</div>
	</nav>
</template>
