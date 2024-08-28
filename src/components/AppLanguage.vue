<!-- @format -->

<script setup>
	import { useI18n } from "vue-i18n";
	import { useRouter } from "vue-router";
	import Tr from "@/i18n/translation";

	const { t, locale } = useI18n();
	const supportedLocales = Tr.supportedLocales;
	const router = useRouter();

	const changeLanguage = async (event) => {
		const newLocale = event.target.value;

		await Tr.changeLanguage(newLocale);

		try {
			await router.replace({ params: { locale: newLocale } });
		} catch (e) {
			console.log(e);
			router.push("/");
		}
	};
</script>
<template>
	<div class="relative w-[36px]">
		<label for="langId" class="w-auto absolute top-0 left-auto">
			<font-awesome-icon
				icon="fa-solid fa-language"
				class="text-white w-auto h-[29px]"
		/></label>
		<div class="custom-select relative">
			<select id="langId" @change="changeLanguage" class="">
				<option
					v-for="sLocale in supportedLocales"
					:key="`locale-${sLocale}`"
					:value="sLocale"
					:selected="locale === sLocale">
					{{ t(`locale.${sLocale}`) }}
				</option>
			</select>
		</div>
	</div>
</template>
<style>
	.custom-select {
		width: 36px;
		height: 24px;
		position: relative;
	}

	.custom-select select {
		appearance: none;
		width: 100%;
		font-size: 1.15rem;
		padding: 0;
		background-color: transparent;
		border: none;
		cursor: pointer;
		opacity: 0;
	}
</style>
