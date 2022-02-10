<template>
    <div class="AceAbout" id="about">
        <h1 class="h2 text-center my-1 Fredoka text-primary"></h1>
        <div class="AceCategory">
            <div class="columns">
                <div class="column col-4 col-sm-12 col-md-6" v-for="item in about" :key="item.caption">
                    <div class="mb-3 text-center">
                        <img :src="item.icon" height="100px"/>
                    </div>
                    <h4 class="h4 text-center mt-3 Fredoka">
                        {{ item.caption }}
                    </h4>
                    <p class="h6">
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'registration-options',
        data () {
            return {
                about: [    
                    {
                        icon: '/img/admission.svg',
                        caption: 'Admission',
                        text: 'We\'re creating new routes for alternative University Admission via IJMB, JUPEB, NABTEB and Cambridge. '+
                        'Valid in Nigeria and overseas'
                    },
                    {
                        icon: '/img/approved.svg',
                        caption: 'Approved',
                        text: 'Our establishment has been approved By NUC, so you can rest assured of Legitimacy'
                    },
                    {
                        icon: '/img/affordable.svg',
                        caption: 'Affordable',
                        text: 'Our offer is brought to you at a relatively affordable price and no JAMB is required'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.AceAbout {
    padding: 2em 0 0;
    background-color: #F0F0F0;
}

.AceAbout img {
    margin-bottom: 1.5em;
}

.AceAbout p {
    width: 80%;
    margin: .5em auto;
    text-align: center;
    color: #777;
}

@media screen and (max-width: 360px) {
    .AceAbout p {
        font-size: 14px;
    }
}
</style>
