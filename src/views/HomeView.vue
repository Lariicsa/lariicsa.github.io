<!-- @format -->

<script setup></script>

<template>
	<div class="w-full max-w-[1300px] flex flex-col justify-center">
		<nav
			class="w-full group flex justify-end items-center max-w-[1280px] h-[48px] rounded-full border border-grey-2 mt-[64px] mx-auto">
			<ul
				class="w-auto px-[24px] flex p-0 text-white-text text-[18px] font-normal">
				<li class="mr-[24px]"><a href="/" class="text-deg-peach">Home</a></li>
				<li class="mr-[24px]"><a href="/experience">Experience</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>

		<main class="flex flex-col w-full mt-[140px] mx-auto max-w-[980px]">
			<div class="text-5xl font-extrabold">
				<span
					class="bg-clip-text text-transparent bg-gradient-to-r from-deg-peach to-deg-purple">
					Hi, I'm Larissa Avila
				</span>
			</div>
			<p class="w-full text-white-text text-[32px] font-normal my-[32px]">
				I'm a Front-end and UI Developer and HTML/CSS ninja, with UI Design
				background. I enjoy coding user interfaces and develop great web
				products.
			</p>

			<div class="flex w-full justify-between max-w-[980px]">
				<div
					id="anim"
					class="relative w-1/3 max-w-[264px] bg-white-opacity/12 backdrop-blur-sm rounded-md border border-grey-2 flex flex-col justify-center items-center h-[208px] group hover:bg-gradient-to-b hover:from-deg-peach hover:to-deg-purple sm:hover:cursor-pointer">
					<font-awesome-icon
						icon="fa-regular fa-folder-closed"
						class="w-1/2 h-auto text-[#C69AC0] absolute group group-hover:flex hidden top-auto left-auto z-0" />
					<p
						class="absolute group-hover:text-magenta text-white-text text-[39px] font-semibold top-auto left-auto z-[2]">
						Experience
					</p>
				</div>
				<div
					class="w-1/3 max-w-[264px] bg-white-opacity/12 backdrop-blur-sm rounded-md border border-grey-2 flex flex-col justify-center items-center h-[208px]">
					<p class="text-white-text text-[39px] font-semibold">About</p>
				</div>
				<div
					class="w-1/3 max-w-[264px] bg-white-opacity/12 backdrop-blur-sm rounded-md border border-grey-2 flex flex-col justify-center items-center h-[208px]">
					<p class="text-white-text text-[39px] font-semibold">Articles</p>
				</div>
			</div>
		</main>
	</div>
</template>

<style>
	h1 {
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
