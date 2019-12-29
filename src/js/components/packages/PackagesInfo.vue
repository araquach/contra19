<template>
    <section id="packages" class="section packages-info hero is-large is-dark">
        <h1 class="title">Packages Suited for everyone</h1>
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