import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
/*Core*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

import {faEnvelope as fasEnvelope} from '@fortawesome/free-solid-svg-icons'

/* @fortawesome Brands */

import {
faGithub,
faLinkedin
} from '@fortawesome/free-brands-svg-icons'

library.add(fasEnvelope, faGithub, faLinkedin)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
