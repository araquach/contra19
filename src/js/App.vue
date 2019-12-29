<template>
    <div>
        <navbar-component/>
        <home-component/>
        <bespoke-component/>
        <database-component/>
        <packages-component/>
        <contact-component/>
    </div>
</template>

<script>
    import Packages from "./components/packages/Packages";
    export default {
        components: {Packages}
    }
</script>
