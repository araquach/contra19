<template>
    <section id="about" class="about hero is-fullheight is-dark">
        <div class="hero-body show columns">
                <div class="section column is-5">
                    <h1 class="title">It's All about the Base</h1>
                    <h2 class="subtitle">An amazing creative space for upcoming hair stylists</h2>
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