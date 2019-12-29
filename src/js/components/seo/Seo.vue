<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import SeoFrontComponent from './SeoFront'
    import SeoInfoComponent from './SeoInfo'

    export default {
        components: {
            SeoFrontComponent,
            SeoInfoComponent
        },

        data() {
            return {
                selectedComponent: 'SeoFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'SeoInfoComponent') {
                    this.selectedComponent = 'SeoFrontComponent'
                } else {
                    this.selectedComponent = 'SeoInfoComponent'
                }
            }
        }
    }
</script>