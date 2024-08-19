<!-- @format -->
<script setup>
import AppButton from "@/components/AppButton.vue";
</script>
<template>
	<nav
		class="w-full group flex justify-end items-center max-w-[1280px] h-[28px] rounded-full mt-[32px] mx-auto">
		<ul
			class="w-auto px-[24px] flex p-0 text-white-text text-[18px] font-medium">
			<li class="mr-[24px]"><a href="/" class="text-[#81B2F6]">Home</a></li>
			<li class="mr-[24px]"><a href="/experience">Experience</a></li>
			<li><a href="/about">About</a></li>
		</ul>

    <AppButton color="blue" size="sm">Resume</AppButton>
	</nav>
</template>
