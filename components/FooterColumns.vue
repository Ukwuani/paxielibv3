<template>
    <div class="columns AceText">
        <p class="h4 BRFirmaBold">{{title}}</p>
        <div class="column col-12 col-sm-12 col-md-12" v-for="content in contents" :key="content.name">
            <div class="text-left  AceContact">
                <a :href="content.link">{{ content.name }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        contents: {
            type: Array,
            required: true
        }
    }
    
}
</script>
<style scoped>
.AceContact a {
    color: #F0F0F0;
}
.AceContact{
    height: 0em;
}

</style>