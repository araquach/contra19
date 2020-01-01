<template>
    <section id="seo" class="seo hero is-medium">
        <div class="hero-body show columns">
            <div class="column"></div>
            <div class="section column is-7">
                <h1 class="title is-1">Search Engine Optimised</h1>
                <p>All Contra sites are optimised to be picked up by all the major search engines, increasing your chances of getting more visits and page clicks. Not only are Contra sites search engine optimised, but Facebook and Twitter Open Graph integration is part of all package prices too as standard!</p>
                <p>Find out more about SEO here</p>
                <button @click="switchComponent" class="button">More info</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        methods: {
            switchComponent() {
                this.$emit('switchComponent')
            }
        }
    }
</script>