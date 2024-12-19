import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faHeart,
  faComment,
  faEye,
  faShareFromSquare,
} from '@fortawesome/free-regular-svg-icons';

import {
  faMagnifyingGlass,
  faHouse,
  faBlog,
  faArrowRight,
  faArrowLeft,
  faLock,
  faUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

const pinia = createPinia();

library.add([
  faHeart,
  faComment,
  faEye,
  faShareFromSquare,
  faMagnifyingGlass,
  faHouse,
  faBlog,
  faArrowRight,
  faArrowLeft,
  faUser,
  faLock,
  faBars
])

const app = createApp(App)
            app.use(pinia)
            app.use(router)
            app.component('font-awesome-icon', FontAwesomeIcon)
            app.mount('#app')
