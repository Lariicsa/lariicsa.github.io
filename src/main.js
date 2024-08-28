/** @format */
import { createApp } from 'vue/dist/vue.esm-bundler'

import { createPinia } from "pinia";
import i18n from "./i18n"
import "./assets/main.css";



/*Core*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";

import {
	faEnvelope as fasEnvelope,
	faBars as fasBars,
	faCircleXmark as fasCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

/* @fortawesome Brands */
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faLinkedin, fasBars, fasEnvelope, fasCircleXmark);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(i18n)

app.mount("#app");
