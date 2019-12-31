<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import ResponsiveFrontComponent from './ResponsiveFront'
    import ResponsiveInfoComponent from './ResponsiveInfo'

    export default {
        components: {
            ResponsiveFrontComponent,
            ResponsiveInfoComponent
        },

        data() {
            return {
                selectedComponent: 'ResponsiveFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'ResponsiveInfoComponent') {
                    this.selectedComponent = 'ResponsiveFrontComponent'
                } else {
                    this.selectedComponent = 'ResponsiveInfoComponent'
                }
            }
        }
    }
</script>