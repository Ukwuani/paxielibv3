<template>
    <section class="columns" :style="'flex-direction: '+content.direction" >
        <div class="column col-4 col-sm-12 col-md-4">
            <div class="AceAboutImage">
                <img :src="content.img" :alt="'Picture of '+content.title " />                    
            </div>
            <h1 class="h5 Fredoka">{{content.title}}</h1>
        </div>

        <div class="card card-pad  column col-8 col-sm-12 col-md-8" :style="'background-color: '+content.color">
            <p class="text-justify">
                {{content.content}}
            </p>
        </div>
    </section>
</template>

<script>
  export default {
        name: 'unique-about',
        props: {
            content: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                
        }
    }
  }
</script>
<style scoped>
div.column.col-4 {
        display: flex;
    flex-direction: column;
    margin: auto;
    padding-bottom: 2.5em;
}
</style>