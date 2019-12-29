<template>
    <section id="social" class="social hero is-large is-dark">
        <div class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Social Media Integration</h1>
                <h2 class="subtitle">Subtitle</h2>
                <p>The impact of social media can play a huge role in the growth of your business. Contra will help you create the necessary connections between your web site and social media channels. From setting up Open Graph data to ensuring you have correctly formatted images that will render correctly on your social media pages, we'll be there to help create a seamless link between the two.</p>
                <p>Learn more about how we'll help with your social media</p>
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