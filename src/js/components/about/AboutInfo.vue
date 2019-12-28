<template>
    <section id="about" class="section about-info hero is-fullheight is-dark">
        <div class="columns is-vcentered">
            <div class="column is-5-desktop">
                <h1 class="title">It's All about the Base</h1>
                <h2 class="subtitle">An amazing creative space for upcoming hair stylists</h2>
                <p>Training and developing our team to the highest possible standard has always been a major priority for us. Through <strong>Jakata & Paul Kemp Hairdressing</strong> we've produced some incredible talent from scratch and helped existing stylists push their skills to the next level.</p>
                <p><strong>Base Hairdressing</strong> was created to centralise our training and offer the best training experience for anyone who wants to embark on a career in hairdressing, along with refining the skills of existing stylists.</p>
            </div>
            <div class="column">
                <div class="columns is-mobile">
                    <div class="column">
                        <figure class="image is-square">
                            <img src="/dist/img/about/base-1.jpg" alt="The salon pic 1">
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="/dist/img/about/base-2.jpg" alt="The Salon pic 2">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-vcentered">
            <div class="column is-5-desktop">
                <p>The Base Team comprises of <strong>Apprentices, Junior Stylists and Graduates</strong> all offering cutting edge services at a fraction of the cost! All services are fully supervised by Senior Stylists and all of our usual high quality products are used.</p>
                <p class="is-size-5">If you're looking for  a new look (without having to break the bank) then book into Base for a free consultation to see what our team can do for you!</p>
                <a href="https://phorest.com/book/salons/basehairacademy" class="button is-primary">Book Here</a>
            </div>
            <div class="column">
                <div class="columns is-mobile">
                    <div class="column">
                        <figure class="image is-square">
                            <img src="/dist/img/about/base-3.jpg" alt="The salon pic 3">
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="/dist/img/about/base-4.jpg" alt="The salon pic 4">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <a href="#about" @click="switchComponent" class="button">Go Back</a>
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