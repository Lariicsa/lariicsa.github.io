<!-- @format -->

<script setup>
	import { ref, computed } from "vue";
	import { RouterView, useRoute } from "vue-router";
	import AppFooter from "@/components/AppFooter.vue";
	import NavMenu from "@/components/NavMenu.vue";
	import AppToaster from "@/components/AppToaster.vue";

	const showMessage = ref(false);
	const route = useRoute();

	const copyEmailToClipboard = () => {
		navigator.clipboard.writeText("lariicsa@gmail.com");
		showMessage.value = true;
		setTimeout(() => {
			showMessage.value = false;
		}, 3000);
	};

	const currenRoute = computed(() => {
		return route.name;
	});
</script>

<template>
	<div
		class="appMain flex relative flex-col mx-auto w-full h-full sm:min-h-[100vh] bg-gradient-to-b from-[#374049] to-[#282634] pb-0 px-[16px]">
		<NavMenu :currenRoute="currenRoute" />

		<RouterView />

		<AppToaster :show="showMessage" />

		<AppFooter @clickOnEnvelope="copyEmailToClipboard" />
	</div>
</template>
<style>
.appMain {
	min-height: calc(100vh - 120px);
}
</style>
