<template>
    <section id="bespoke" class="section bespoke-info hero is-fullheight is-dark">
        <div class="columns is-vcentered">
            <div class="column is-5-desktop">
                <h1 class="title">Bespoke Handcrafted Designs</h1>
                <h2 class="subtitle">Subtitle</h2>
                <p>More Copy</p>
            </div>
            <div class="column">
                <div class="columns is-mobile">
                    <div class="column">
                        <figure class="image is-square">
                            <img src="" alt="Image 1">
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="" alt="Image 2">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-vcentered">
            <div class="column is-5-desktop">
                <p>Text</p>
            </div>
            <div class="column">
                <div class="columns is-mobile">
                    <div class="column">
                        <figure class="image is-square">
                            <img src="" alt="pic 3">
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="" alt="pic 4">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <a href="#bespoke" @click="switchComponent" class="button">Go Back</a>
                </div>
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