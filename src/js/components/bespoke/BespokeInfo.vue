<template>
    <section id="bespoke" class="section bespoke-info hero is-large is-dark">
        <h1 class="title">Bespoke Handcrafted Designs</h1>
        <h2 class="subtitle">Subtitle</h2>
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