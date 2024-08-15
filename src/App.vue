<!-- @format -->

<script setup>
	import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<div
		class="flex flex-col font-khula items-center mx-auto w-full h-full backdrop-sepia min-h-[100vh] bg-gradient-to-r from-[#000204] to-[#010101]">
		<div
			class="flex flex-col items-center mx-auto px-[16px] w-full h-full min-h-[100vh] bg-top bg-cover bg-no-repeat bg-gradient-to-r from-[#000204] to-[#010101]"
			style="background-image: url(../src/assets/bg-saturation.png)">
			<RouterView />
		</div>
	</div>
</template>
