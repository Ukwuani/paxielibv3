<template>
   <a :href="link">
    <h1 class="AceTitle h4 Fredoka">
        {{ text }}
    </h1>
    </a>
</template>

<script>
    export default {
        name: 'Ace-title',
        props: {
            text: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                link: "https://aceworldqbank.com.ng/"
            }
        }
    }
</script>

<style scoped>
.AceTitle {
    margin: 0;
    margin-left: 10px;
    color: #FFF;
}
a {
    text-decoration-line: none
}
</style>
