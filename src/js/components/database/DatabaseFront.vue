<template>
    <section id="database" class="database hero is-medium">
        <div class="hero-body show columns">
            <div class="section column is-7">
                <h1 class="title is-1">Database Driven Applications</h1>
                <p>Most web sites require a level of interactivity, wether it's storing potential clients details for marketing campaigns, online surveys or price calculators.</p>
                <p>See some ideas of what Contra can do for your site</p>
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