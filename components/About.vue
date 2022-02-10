<template>
    <section class="AceAbout" id="about">
        <h1 class="h2 text-center my-1 Fredoka text-primary"></h1>
        <div class="AceCategory">
            <div class="columns">
                <div class="column AceAboutImg col-4 col-sm-12 col-md-6" >
                   <div> <img src="/img/logo-blue.png"/>CE </div>
                </div>
                <div class="column col-8 col-sm-12 col-md-6">
                    <p class="h4 BRFirmaRegular">
                        {{ about }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'registration-options',
        data () {
            return {
                about: `Ace offers the Excellence money cannot afford. The team researched thoroughly and came 
                                up with this simple solution to help you learn and become an ace scholar. We have lots of 
                                questions in our bank. With the help of Artificial Intelligence, we have been able to study and 
                                design this fully customizable platform.`
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
    height: 5rem;
    margin-bottom: -.4em;
    margin-right: -.6em;
}

.AceAboutImg {
    color: #0066f5;
    font-size: 5rem;
    font-weight: 800;
    margin-bottom: .2em;
}

.AceAbout p {
    width: 100%;
    margin: .5em auto;
    text-align: justify;
    color: #777;
}

@media screen and (max-width: 360px) {
    .AceAbout p {
        font-size: 14px;
    }
}
</style>
