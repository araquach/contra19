<template>
    <b-navbar fixed-top>
        <template slot="brand">
            <b-navbar-item href="/">
                <img src="/dist/img/contra-logo.svg" width="130" alt="Contra Design">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#responsive" v-scroll-to="'#responsive'">
                Home
            </b-navbar-item>
            <b-navbar-item href="#social" v-scroll-to="'#social'">
                Social
            </b-navbar-item>
            <b-navbar-item href="#database" v-scroll-to="'#database'">
                Database
            </b-navbar-item>
            <b-navbar-dropdown label="More">
                <b-navbar-item href="#bespoke" v-scroll-to="'#bespoke'">
                    Bespoke
                </b-navbar-item>
                <b-navbar-item href="#seo" v-scroll-to="'#seo'">
                    SEO
                </b-navbar-item>
                <hr class="navbar-divider">
                <b-navbar-item href="#packages" v-scroll-to="'#packages'">
                    Prices
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a href="#contact" class="button is-light" v-scroll-to="'#contact'">
                        Contact Us
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>

</template>