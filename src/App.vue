<!-- @format -->

<script setup>
	import { RouterLink, RouterView } from "vue-router";
	import AppFooter from "@/components/AppFooter.vue";
	import AppToaster from "@/components/AppToaster.vue";
	import { ref } from "vue";

	const showMessage = ref(false);

	const copyEmailToClipboard = () => {
		navigator.clipboard.writeText("lariicsa@gmail.com");
		showMessage.value = true;
		setTimeout(() => {
			showMessage.value = false;
		}, 3000);
	};
</script>

<template>
	<div
		class="flex relative flex-col mx-auto w-full h-full min-h-[100vh] bg-gradient-to-b from-[#374049] to-[#282634] px-[16px]">
		<RouterView />

		<AppToaster :show="showMessage" />

		<AppFooter @clickOnEnvelope="copyEmailToClipboard" />
	</div>
</template>
