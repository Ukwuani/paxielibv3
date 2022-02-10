<template>
    <section class="columns" >
        <div class="column col-3 col-sm-12 col-md-4">
            <h1 class="Fredoka h3">
                {{content.centre}}
                </h1>
                <div class="AceFeeBack"/>
        </div>

        <div class="card card-pad  column col-9 col-sm-12 col-md-8" :style="'background-color: '+content.color">
            <p class="text-justify" v-html="content.content">
            </p>
        </div>
    </section>
</template>

<script>
import StepNumber from '@/components/StepsNumber'

  export default {
        name: 'unique-about',
        props: {
            content: {
                type: Object,
                required: true
            }
        },
        components: {
            StepNumber
        },
        data () {
            return {
                
        }
    }
  }
</script>
<style scoped>
div.column.col-3 {
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    padding-bottom: 2.5em;
}

.AceFeeBack {
    background-color: #606ad95f;
    height: 1em;
    width: 6em;
    z-index: -1000;
    position: relative;
    border-radius: 5em;
    transform: skew(10deg, 20deg);
    transform: rotate(10deg)
}

</style>