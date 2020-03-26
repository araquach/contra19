import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import { routes } from './routes'

import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'

Vue.use(Buefy)
Vue.use(VueRouter)
Vue.use(Vuelidate)

const router = new VueRouter({
    routes
})

Vue.use(VueScrollTo)

window.axios = require('axios')

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

const appSeo = new Vue({
    el: '#appSeo'
});
