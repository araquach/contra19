<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import PackagesFrontComponent from './PackagesFront'
    import PackagesInfoComponent from './PackagesInfo'

    export default {
        components: {
            PackagesFrontComponent,
            PackagesInfoComponent
        },

        data() {
            return {
                selectedComponent: 'PackagesFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'PackagesInfoComponent') {
                    this.selectedComponent = 'PackagesFrontComponent'
                } else {
                    this.selectedComponent = 'PackagesInfoComponent'
                }
            }
        }
    }
</script>