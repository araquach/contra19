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

function scrollPosition() {
    if (window.innerWidth > 900) {
        return -200
    } else {
        return -30
    }
}

Vue.use(VueScrollTo, {
     offset: scrollPosition()
})

window.axios = require('axios')

Vue.use(Vuelidate)

const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.use(VueScrollTo)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
