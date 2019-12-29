import Vue from 'vue'
import App from './App.vue'
import Cookie from './components/Cookie'
import Navbar from './components/layout/Navbar'
import NavbarSeo from './components/layout/NavbarSeo'
import Home from './components/layout/Home'
import Bespoke from "./components/bespoke/Bespoke";
import Contact from './components/contact/Contact'

import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'
import Vuelidate from 'vuelidate'

Vue.use(Buefy)
Vue.use(VueScrollTo)
Vue.use(Vuelidate)

Vue.component('navbar-component', Navbar)
Vue.component('navbar-seo-component', NavbarSeo)
Vue.component('cookie-component', Cookie)
Vue.component('bespoke-component', Bespoke)
Vue.component('home-component', Home)
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
