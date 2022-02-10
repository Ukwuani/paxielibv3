<template>
    <div>
         <div class="outer">
            <div class="inner">
                <!-- <h1 class="Fredoka h4 AceStep ">Learn Anywhere, Anytime with us</h1>
                <button class="AceSquareEdgeBtn">
                    <b> GET AN ACCOUNT</b>
              </button>

            <button class="AceSquareEdgeBtn">
                    <b> I HAVE AN ACCOUNT</b>
              </button> -->
            </div>
            <!-- <div class="back"></div> -->
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
    color: #0066f5;
    padding: 1em;
    width: 30em;
    transform: rotate(-10deg);
    margin-top: 1em;
    height: 30em;
    justify-content: center;
    align-items: center;
    background-color: #ffffff44;
    text-align: center;
    margin: auto
}

.inner button {
    top: 0%;
    position: absolute;
    background-color: #0066f5;
    color: #fefefe;
    text-shadow: #fefefe;
    border: none
}

.outer {
    top: 5%;
    position: absolute;
    background-color: #eea2a26e;
    height: 27em;
    width: 27em;
    padding-top: .5em;
    padding-right: -20px;
    shape-outside: circle(20%);
     justify-content: center;
    align-items: center;
    border-radius: 100%;
    transform: rotate(10deg)
}

.AceStep {
    margin-bottom: 1em;
    text-shadow: -1px -1px 0 #fefefe, 1px -1px 0 #fefefe, -1px 1px 0 #fff, 1px 1px 0 #fefefe
}


.back {
     background-color: #ffffff6e;
    height: 27em;
    width: 27em;
    position: fixed;
    z-index: -1000;
    border-radius: 2em;
    top:0;
    transform: rotate(20deg);
    transform:  skew(10deg, 10deg)

}
</style>
