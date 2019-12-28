<template>
    <section id="contact" class="contact hero is-fullheight is-dark">
        <div class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Location & Contact Info</h1>
                <h2 class="subtitle">If you want to find us or get in touch then click the button!</h2>
                <button @click="switchComponent" class="button">Info Here</button>
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