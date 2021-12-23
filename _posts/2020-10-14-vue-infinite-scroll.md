---
title: Infinite scroll component in vue
layout: post
date: 2020-10-14 16:48
image: /assets/post-preview/infinite_scroll.png
img1: /assets/coaching/coaching1.jpg
img2: /assets/coaching/coaching2.jpg
category: blog
tag:
- VUE
- HTML
- CSS
author: Larissa
description: Infinite scroll component made in Vue & SASS CSS
menurl: /blog
---

<p>This is just an example of how to create infinite scroll behavior from an array items list.</p>

<p>After create a project with in Vue, we'll need these files:</p>

```json
src
  ├── assets
  ├── components
  ├── store
  ├── app
  └── main.js
```

```html
<template>
  <div class="infscroll__container">
    <div id="infinite-list" class="infscroll__items">
      <transition name="fade">
        <div class="infscroll__loader-bg" v-show="showLoading">
          <div class="infscroll__loader">{{ textLoading }}</div>
        </div>
      </transition>
      <slot></slot>
      <ButtonFan
        v-show="isMobile"
        @btnClick="loadMore()"
        text="Load more ..."
        ui="primary infscroll"
      />
    </div>
  </div>
</template>
```
	
	