<template>
    <button
        @click="scrollToTop"
        class="AceBackToTop btn s-circle btn-action btn-error"
        :class="{ show: windowScrollHeight >= 180 }">
        <i class="icon icon-upward"></i>
    </button>
</template>

<script>
    export default {
        name: 'back-to-top',
        mounted () {
            window.addEventListener('scroll', () => {
                this.windowScrollHeight = window.scrollY
            }, false)
        },
        data () {
            return {
                windowScrollHeight: 0
            }
        },
        methods: {
            scrollToTop () {
                window.scrollTo(0, 0)
            }
        }
    }
</script>

<style scoped>
.AceBackToTop {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 1em;
    display: none;
    transition: all 0.4s ease-in-out 0s;
}

.show {
    display: block;
}
</style>