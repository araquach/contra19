<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import AboutFrontComponent from './AboutFront'
    import AboutInfoComponent from './AboutInfo'

    export default {
        components: {
            AboutFrontComponent,
            AboutInfoComponent
        },

        data() {
            return {
                selectedComponent: 'AboutFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'AboutInfoComponent') {
                    this.selectedComponent = 'AboutFrontComponent'
                } else {
                    this.selectedComponent = 'AboutInfoComponent'
                }
            }
        }
    }
</script>