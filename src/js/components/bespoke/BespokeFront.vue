<template>
    <section id="bespoke" class="bespoke hero is-medium">
        <div class="hero-body show columns">
            <div class="column"></div>
            <div class="section column is-7">
                <h1 class="title is-1">Bespoke Handcrafted Designs</h1>
                <p>Great design is the key to an engaging web site, from the way it looks to the user experience. Contra will work closely with you to determine the look and feel of your site, in line with your branding. We'll hand build every aspect of the site to your requirements, offering ultimate flexibility and future proofing. Don't make the mistake of getting stuck with a limiting template based website with no room for future development!</p>
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