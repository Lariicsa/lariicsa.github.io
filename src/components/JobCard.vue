<!-- @format -->
<script setup>
	import AppTag from "./AppTag.vue";

	defineProps({
		items: {
			type: Object,
			default: () => {},
		},
	});
</script>
<template>
	<div
		v-for="item in items"
		class="flex shadow-md flex-col items-center bg-[#ffffff] w-[672px] h-[344px] rounded-lg border border-[#CED7E5] px-[48px] py-[24px] mb-[104px] last:mb-0 relative">
		<div
			class="flex w-[20px] h-[20px] rounded-full bg-[#F0BAEE] absolute left-[-172px] top-[-1px]">
			<span class="flex w-[80px] text-[#F0BAEE] text-[14px] font-semibold capitalize absolute top-0 left-[32px]">{{ item.date }}</span>
		</div>

		<h3 class="text-[#373737] font-bold text-[30px] my-0">
			{{ item.title }}
		</h3>
		<h4 class="text-[#5252E1] text-[26px] font-semibold text-center my-[8px]">
			{{ item.subtitle }}
		</h4>
		<p class="text-[16px] text-[#51576E] text-center w-auto my-[12px]">
			{{ item.abstract }}
		</p>
		<hr class="border-0 h-[1px] bg-[#EAEAEA] w-full my-[8px]" />
		<div class="flex justify-around items-center flex-wrap">
			<AppTag v-for="skill in item.skills">{{ skill }}</AppTag>
		</div>
	</div>
</template>
