import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
/*Core*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

import {faFolderClosed} from '@fortawesome/free-regular-svg-icons'

import {
  faLaptopCode as fasLaptopCode,
} from '@fortawesome/free-solid-svg-icons'

library.add(fasLaptopCode, faFolderClosed)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
