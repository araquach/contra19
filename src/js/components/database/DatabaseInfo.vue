<template>
    <section id="database" class="section database-info hero is-large is-dark">
        <h1 class="title">Database Driven Applications</h1>
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