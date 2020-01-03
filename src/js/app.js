import Vue from 'vue'
import App from './App.vue'
import Cookie from './components/Cookie'
import Navbar from './components/layout/Navbar'
import NavbarSeo from './components/layout/NavbarSeo'
import Responsive from './components/Responsive'
import Bespoke from "./components/Bespoke"
import Database from "./components/Database"
import Packages from "./components/Packages"
import Seo from "./components/Seo"
import Social from "./components/Social";
import Contact from './components/Contact'

import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'
import Vuelidate from 'vuelidate'

Vue.use(Buefy)

Vue.use(VueScrollTo, {
    offset: -50
})

Vue.use(Vuelidate)

Vue.component('navbar-component', Navbar)
Vue.component('navbar-seo-component', NavbarSeo)
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

const appSeo = new Vue({
    el: '#appSeo'
});
