<template>
    <section id="packages" class="packages hero is-medium">
        <div class="hero-body show columns">
            <div class="section column is-7">
                <h1 class="title is-1">Packages Suited for everyone</h1>
                <p>Contra will build a site for you to the highest standard, at an affordable price. We may not be the cheapest, but due to every site being hand crafted (and not template based) you can be assured that you will have a site that can evolve with the growth of your business. There are no hidden costs and we will always be there to offer new ideas and move the site forward with the times.</p>
                <p>All our jobs are quoted after a FREE consultation, but to give an idea of pricing</p>
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