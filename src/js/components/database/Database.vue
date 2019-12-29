<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import DatabaseFrontComponent from './DatabaseFront'
    import DatabaseInfoComponent from './DatabaseInfo'

    export default {
        components: {
            DatabaseFrontComponent,
            DatabaseInfoComponent
        },

        data() {
            return {
                selectedComponent: 'DatabaseFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'DatabaseInfoComponent') {
                    this.selectedComponent = 'DatabaseFrontComponent'
                } else {
                    this.selectedComponent = 'DatabaseInfoComponent'
                }
            }
        }
    }
</script>