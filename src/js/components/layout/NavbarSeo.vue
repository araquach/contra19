<template>
    <b-navbar class="is-fixed-top is-spaced">
        <template slot="start">
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-item href="/#about">
                About
            </b-navbar-item>
            <b-navbar-item href="/#team">
                Team
            </b-navbar-item>
            <b-navbar-item href="/#offers">
                Offers
            </b-navbar-item>
            <b-navbar-dropdown label="More">
                <b-navbar-item href="/#joinus">
                    Join Us
                </b-navbar-item>
                <!--                <b-navbar-item href="/#blog">-->
                <!--                    Blog-->
                <!--                </b-navbar-item>-->
                <hr class="navbar-divider">
                <b-navbar-item href="/#models">
                    Model Register
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a href="https://phorest.com/book/salons/basehairacademy" class="button is-primary">
                        <strong>Book Now</strong>
                    </a>
                    <a href="/#contact" class="button is-light">
                        Contact Us
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>