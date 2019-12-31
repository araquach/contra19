<template>
    <section id="responsive" class="responsive hero is-large">
        <div class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Modern Responsive Web Design</h1>
                <h2 class="subtitle">Subtitle</h2>
                <p>Contra Designed web sites are hand built utilising the most up to date web technologies and standards. Wether its a simple on-line brochure or a complex web application your looking for, you can be confident to get a great looking, user friendly, responsive site that will work across all platforms.</p>
                <p>Find out about responsive design here</p>
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