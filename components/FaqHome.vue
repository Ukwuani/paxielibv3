<template>
<div class="AceCatchPhrases ">
            <div class="columns">
                    <div class="column col-3 col-sm-12 col-md-6 mb-3 text-center">
                        <img :src="content.icon" height="100px"/>
                    </div>

                    <div class="column col-9 col-sm-12 col-md-6 mb-3 text-center">
                    <h4 class="h4 text-center mt-3 Fredoka">
                        {{ content.caption }}
                    </h4>
                    <p class="h6">
                        {{ content.text }}
                    </p>
                    <div class="mt-1 mb-1">
                        <a :href="content.url">
                     <button>
                         More FAQs
                     </button>
                      </a>
                    </div>
                    </div>
             </div>
        </div>
</template>
<<script>
export default {
     name: 'faq-home',
     props: {
         content: {
             type: Object,
             required: true
         }
     },
}
</script>
<style scopeed>
.AceCatchPhrases button {
    color: #ff5722;
    border: 1.5px solid #ff5722;
}

.AceCatchPhrases button:hover {
    color: #fafafa;
    background: #ff5722;
}
</style>