<template>
    <div>
        <Navbar/>
        <Main/>
    </div>
</template>

<script>
    import Navbar from './components/layout/Navbar'
    import Main from './components/layout/Main'
    export default {
        components: {
            Navbar,
            Main
        }
    }
</script>
