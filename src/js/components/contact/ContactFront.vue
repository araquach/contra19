<template>
    <section id="contact" class="contact hero is-large">
        <div class="hero-body show columns">
            <div class="section column is-7">
                <h1 class="title is-1">Get in touch</h1>
                <p class="is-size-4 is-family-secondary">If you're looking for a quote or to talk over your ideas to see what we can do for you just click the link below</p>
                <button class="button" @click="switchComponent">Info Here</button>
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