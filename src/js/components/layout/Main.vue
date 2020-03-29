<template>
    <div>
        <Responsive/>
        <Social/>
        <Database/>
        <Bespoke/>
        <Seo/>
        <Packages/>
        <Contact/>
    </div>
</template>
<script>
    import Responsive from '../Responsive'
    import Bespoke from '../Bespoke'
    import Database from '../Database'
    import Packages from '../Packages'
    import Seo from '../Seo'
    import Social from '../Social'
    import Contact from '../contact/Contact'

    export default {
        components: {
            Responsive,
            Database,
            Bespoke,
            Packages,
            Seo,
            Social,
            Contact
        }
    }
</script>