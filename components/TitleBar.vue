<template>
    <div class="AceTitleBar">
        <img src="/img/logo.png" alt="Logo" width="50px" />
        <ace-title :text="appName" />
    </div>
</template>
<script>
import AceTitle from '@/components/Title'

export default {
    name: 'title-bar',
    data() {
        return {
        }
    },
    components: {
        AceTitle
    },
    computed: {
        appName () {
            return this.$store.getters.appName
        }
    }
}
</script>
<style scoped>
 .AceTitleBar {
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 4.5em;
    margin: auto 1% auto;
}
</style>