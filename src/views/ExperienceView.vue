<!-- @format -->

<script setup>
import AppTimeline from "@/components/AppTimeline.vue";
	import JobCard from "@/components/JobCard.vue";

	const experiences = [
		{
			title: "Sr. Frontend Developer",
			subtitle: "Latouraine Inc.",
			date: 'current',
			abstract: `Develop Web Apps (CMS, Portal, Social) and Landing pages for Adult web content.
			Fix UI and implement new FE technology.`,
			skills: [
				"Vue",
				"Pinia",
				"Tailwind",
				"Vanilla Js",
				"SCSS",
				"jQuery",
				"PHP",
				"Laravel",
				"Inertia",
				"Vagrant",
				"Gitflow",
				"Scrum",
				"Envoyer",
			],
		},


		{
			title: "Sr. Frontend Developer",
			subtitle: "Latouraine Inc.",
			date: '2020 - 2022',
			abstract: `Develop Web Apps (CMS, Portal, Social) and Landing pages for Adult web content.
			Fix UI and implement new FE technology.`,
			skills: [
				"Vue",
				"Pinia",
				"Tailwind",
				"Vanilla Js",
				"SCSS",
				"jQuery",
				"PHP",
				"Laravel",
				"Inertia",
				"Vagrant",
				"Gitflow",
				"Scrum",
				"Envoyer",
			],
		},

		{
			title: "Sr. Frontend Developer",
			subtitle: "Latouraine Inc.",
			date: '2020 - 2022',
			abstract: `Develop Web Apps (CMS, Portal, Social) and Landing pages for Adult web content.
			Fix UI and implement new FE technology.`,
			skills: [
				"Vue",
				"Pinia",
				"Tailwind",
				"Vanilla Js",
				"SCSS",
				"jQuery",
				"PHP",
				"Laravel",
				"Inertia",
				"Vagrant",
				"Gitflow",
				"Scrum",
				"Envoyer",
			],
		},
	];
</script>
<template>
	<div class="flex mx-auto flex-col">
		<h1 class="mt-[56px] text-[44px] text-[#E5E5E5] text-center font-semibold">
			Experience
		</h1>

		<div class="flex justify-between h-auto w-full max-w-[1230px] mt-[84px] sm:mt-[64px] mb-[100px]">
			<AppTimeline/>
			<div class="flex flex-col w-full">
				
				<JobCard :items="experiences" />
			</div>
		</div>
	</div>
</template>
