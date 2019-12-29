<template>
    <div>
        <navbar-component/>
        <home-component/>
        <database-component/>
        <bespoke-component/>
        <seo-component/>
        <packages-component/>
        <contact-component/>
    </div>
</template>

<script>
    import Packages from "./components/packages/Packages";
    import Seo from "./components/seo/Seo";
    export default {
        components: {Seo, Packages}
    }
</script>
