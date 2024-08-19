<!-- @format -->
<script setup>
	import AppButton from "@/components/AppButton.vue";
	import AppContact from "@/components/AppContact.vue";
	import NavMenu from "@/components/NavMenu.vue";
</script>

<template>
	<div class="w-full max-w-[1300px] flex flex-col justify-center">
		<NavMenu />

		<main class="flex flex-col w-full mt-[64px] mx-auto max-w-[708px]">
			<div class="text-[64px] font-extrabold text-[#e0e0e0]">
				Hi
				<h1
					class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-deg-peach to-deg-purple">
					, I'm Larissa Avila
				</h1>
			</div>
			<p class="text-[#e0e0e0] font-semibold text-[44px]">
				Frontend / UI Developer and HTML/CSS ninja.
			</p>

			<p class="w-full text-[#9FA1A4] mt-[24px] text-[20px] font-light">
				Frontend experience for over 6 years. <br />
				Looking for new challenges where I can apply and improve my tech skills
				with every different project.
			</p>

			<div class="flex w-full my-[64px]">
				<AppButton color="peach" size="lg" class="sm:mr-[48px]"
					>Experience</AppButton
				>
				<AppButton color="pink" size="lg">About me</AppButton>
			</div>
			<AppContact />
		</main>
	</div>
</template>
