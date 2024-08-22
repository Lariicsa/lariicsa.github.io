<!-- @format -->
<script setup>
	import { useRouter } from "vue-router";
	import { ref } from "vue";
	import AppButton from "@/components/AppButton.vue";
	import AppContact from "@/components/AppContact.vue";
	import AppToaster from "@/components/AppToaster.vue";

	const router = useRouter();

	const showMessage = ref(false);
	const copyEmailToClipboard = () => {
		navigator.clipboard.writeText("lariicsa@gmail.com");
		showMessage.value = true;
		setTimeout(() => {
			showMessage.value = false;
		}, 3000);
	};

	const goTo = (path) => {
		router.push({ path: `/${path}` });
	};
</script>

<template>
	<div class="w-full flex-col max-w-[1300px] flex justify-center mx-auto">
		<main class="flex w-full flex-col md:flex-row items-center">
			<div
				class="flex flex-col w-full md:w-2/3 mt-[32px] sm:mt-[64px] mx-auto max-w-[708px] items-center sm:items-start">
				<div
					class="text-[40px] sm:text-[64px] text-center sm:text-left font-extrabold text-[#e0e0e0]">
					Hi,
					<h1
						class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-deg-peach to-deg-purple">
						I'm Larissa Avila
					</h1>
				</div>
				<p
					class="flex items-center text-center sm:text-left sm:items-start w-auto text-[#e0e0e0] font-semibold text-[28px] sm:text-[44px]">
					Frontend / UI Developer and HTML/CSS ninja.
				</p>

				<p
					class="w-full text-[#9FA1A4] mt-[24px] text-[17px] sm:text-[20px] font-light text-center sm:text-left">
					Frontend experience for over 6 years. <br />
					Looking for new challenges where I can apply and improve my tech
					skills with every different project.
				</p>

				<div
					class="flex w-full justify-center sm:justify-start my-[36px] sm:my-[64px]">
					<AppButton
						@click="goTo('experience')"
						color="peach"
						size="lg"
						class="mr-[24px] sm:mr-[48px]"
						>Experience</AppButton
					>
					<AppButton @click="goTo('about')" color="pink" size="lg"
						>About me</AppButton
					>
				</div>
				<AppContact @clickOnEnvelope="copyEmailToClipboard" />
			</div>

			<div class="w-full md:w-1/3 h-full">
				<div
					class="rounded-full flex justify-center items-center bg-gradient-to-r from-[#F89E7B] to-[#C5A9F3] w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] mb-[88px] mt-[40px] mx-auto md:m-auto">
					<div
						class="rounded-full w-[94%] h-[94%] bg-cover"
						style="background-image: url(../../public/home_me.jpg)"></div>
				</div>
			</div>
		</main>

		<AppToaster :show="showMessage" />
	</div>
</template>
