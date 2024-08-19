<!-- @format -->

<script setup>
	import { RouterLink, RouterView } from "vue-router";
	import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
	<div
		class="flex relative flex-col items-center mx-auto w-full h-full min-h-[100vh] bg-gradient-to-b from-[#374049] to-[#282634] sm:px-[16px]">
		<RouterView />

		<AppFooter />
	</div>
</template>
