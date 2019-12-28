<template>
    <div v-show="showCookie" id="cookie" class="level">
        <div class="level-left">
            <div class="level-item has-text-white">
                This website uses cookies to ensure you get the best experience
            </div>
            <div class="level-item has-text-white">
                Privacy policy
            </div>
        </div>
        <transition name="fade">
        <div class="level-right">
            <div @click="showCookie = false" class="level-item button">Got it</div>
            <div class="level-item button">Disagree</div>
        </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showCookie: false
            }
        }
    }
</script>

<style>
    #cookie {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: rgba(40,60,60,.8);
        padding: 3rem;
        height: 7rem;
        z-index: 1;
    }
</style>