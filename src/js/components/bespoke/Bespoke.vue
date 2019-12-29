<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import BespokeFrontComponent from './BespokeFront'
    import BespokeInfoComponent from './BespokeInfo'

    export default {
        components: {
            BespokeFrontComponent,
            BespokeInfoComponent
        },

        data() {
            return {
                selectedComponent: 'BespokeFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'BespokeInfoComponent') {
                    this.selectedComponent = 'BespokeFrontComponent'
                } else {
                    this.selectedComponent = 'BespokeInfoComponent'
                }
            }
        }
    }
</script>