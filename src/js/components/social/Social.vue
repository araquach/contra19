<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import SocialFrontComponent from './SocialFront'
    import SocialInfoComponent from './SocialInfo'

    export default {
        components: {
            SocialFrontComponent,
            SocialInfoComponent
        },

        data() {
            return {
                selectedComponent: 'SocialFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'SocialInfoComponent') {
                    this.selectedComponent = 'SocialFrontComponent'
                } else {
                    this.selectedComponent = 'SocialInfoComponent'
                }
            }
        }
    }
</script>