import Vue from 'vue'
import App from './App.vue'
import Cookie from './components/Cookie'
import Navbar from './components/layout/Navbar'
import Responsive from './components/Responsive'
import Bespoke from './components/Bespoke'
import Database from './components/Database'
import Packages from './components/Packages'
import Seo from './components/Seo'
import Social from './components/Social'
import Contact from './components/contact/Contact'

import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'
import Vuelidate from 'vuelidate'

Vue.use(Buefy)

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

Vue.component('navbar-component', Navbar)
Vue.component('cookie-component', Cookie)
Vue.component('responsive-component', Responsive)
Vue.component('bespoke-component', Bespoke)
Vue.component('database-component', Database)
Vue.component('packages-component', Packages)
Vue.component('seo-component', Seo)
Vue.component('social-component', Social)
Vue.component('contact-component', Contact)

window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

new Vue({
    el: '#app',
    render: h => h(App)
});
