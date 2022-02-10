<template>
    <div>
         <div class="outer">
            <div class="inner">
                <h1 class="Fredoka h4 AceStep ">Step</h1>
                <span class="Fredoka h1">{{step}}</span>
            </div>
            <div class="back"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ace-steps',
    props: {
        step: {
            type: String,
            required: true
        }
        
    }

}
</script>

<style>
.inner {
    border-radius: 100%;
    color: #fafafa;
    padding: 1em;
    width: 7em;
    transform: rotate(-10deg);
    margin-top: 1em;
    height: 7em;
    justify-content: center;
    align-items: center;
    background-color: #4b48d6c7;
    text-align: center;
    margin: auto
}


.outer {
    background-color: #5b69d96e;
    height: 7em;
    width: 7em;
    padding-top: .5em;
    padding-right: -20px;
    shape-outside: circle(20%);
     justify-content: center;
    align-items: center;
    border-radius: 2em;
    border-bottom-left-radius: 100%;
    transform: rotate(10deg)
}

.AceStep {
    margin-bottom: 0;
}

.back {
     background-color: #5b69d96e;
    height: 7em;
    width: 7em;
    position: fixed;
    z-index: -1000;
    border-radius: 2em;
    top:0;
    transform: rotate(20deg);
    transform:  skew(10deg, 10deg)

}
</style>
