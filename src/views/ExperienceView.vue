<!-- @format -->

<script setup>
	import AppTimeline from "@/components/AppTimeline.vue";
	import JobCard from "@/components/JobCard.vue";
	import experience from '@/data/experience'

	const experiences = experience
	

</script>
<template>
	<div class="flex mx-auto flex-col">
		<h1 class="mt-[56px] text-[44px] text-[#E5E5E5] text-center font-semibold">
			Experience
		</h1>

		<div
			class="flex justify-between h-auto w-full max-w-[1230px] mt-[84px] sm:mt-[64px] mb-[100px]">
			<AppTimeline />
			<div class="flex flex-col w-full">
				<JobCard :items="experiences" />
			</div>
		</div>
	</div>
</template>
