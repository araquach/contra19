<template>
    <b-navbar class="is-fixed-top is-spaced">
        <template slot="brand">
            <b-navbar-item href="#" v-scroll-to="'#home'">
                <img src="/dist/img/contra-logo.svg" width="100" alt="Contra Design">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#social" v-scroll-to="'#social'">
                Social Media
            </b-navbar-item>
            <b-navbar-item href="#database" v-scroll-to="'#database'">
                Database Driven
            </b-navbar-item>
            <b-navbar-dropdown label="More">
                <b-navbar-item href="#bespoke" v-scroll-to="'#bespoke'">
                    Bespoke Design
                </b-navbar-item>
                <b-navbar-item href="#seo" v-scroll-to="'#seo'">
                    SEO
                </b-navbar-item>
                <hr class="navbar-divider">
                <b-navbar-item href="#packages" v-scroll-to="'#packages'">
                    Package Prices
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