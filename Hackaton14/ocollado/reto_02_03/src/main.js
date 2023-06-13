import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../src/assets/scss/main.scss'
import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import jquery from 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap';

createApp(App)
    .use(jquery)
    .use(bootstrapBundle)
    .use(router)
    .mount('#app');