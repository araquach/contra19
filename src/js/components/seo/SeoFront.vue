<template>
    <section id="seo" class="seo hero is-large is-dark">
        <div class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Search Engine Optimised</h1>
                <h2 class="subtitle">Subtitle</h2>
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