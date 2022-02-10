<template>
    <footer class="AceBottombar ">
        <div class="AceSocialIllustration"></div>
        <div id="get-in-touch" class="AceSocial bg-primary">
            <div class="columns">
                <!-- Column A -->
                <section class="FooterColumnA column col-4 col-sm-12">
                    <AceFooterColumn title="About Us" :contents="footerColumnA"/>
                </section>

                <!-- Column B -->
                <section class="FooterColumnB column col-4 col-sm-12">
                    <AceFooterColumn title="Products" :contents="footerColumnB"/>
                </section>

                <!-- Column C-->
                <section class="FooterColumnC column col-4 col-sm-12">
                    <div class="columns">
                        <p class="h4 BRFirmaBold">Get in touch</p>
                        <div class="col-12 col-sm-12 col-md-12" v-for="contact in contacts" :key="contact.icon">
                            <div class="text-left  AceContact">
                                <i :class="'mdi mdi-26px mdi-' + contact.icon"></i>
                            <!-- </div>
                            <div class="text-center"> -->
                                <a :href="contact.link">{{ contact.name }}</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            

        

        </div>
        <h6>
        <a href="https://paxielib.com/privacy/" target="_blank"><span class="BRFirmaRegular AcePrivacy"> Privacy Policy </span></a>

            <strong>Paxielib</strong> &copy; 2019. All Rights Reserved
        </h6>
    </footer>
</template>

<script>
import AceFooterColumn from './FooterColumns'
    export default {
        name: 'bottombar',
        components: {
            AceFooterColumn
        },
        data () {
            return {
            }
        },
        computed: {
            contacts () {
                return this.$store.getters.contacts
            },
            footerColumnA () {
                return this.$store.getters.footerColumnA
            },
            footerColumnB () {
                return this.$store.getters.footerColumnB
            }
        }
    }
</script>

<style scoped>
.AceBottombar {
    position: relative;
    /* background: linear-gradient(135deg,#499bea,#798eea); */
    /* background-color: #111; */
    /* padding: 1em; */
}

.column {
    margin-bottom: 0px;
}

.AcePrivacy {
    margin-right: 3em;
}

.AceBottombar .AceSocialIllustration {
    background-image: url('/img/social.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    left: 1%;
    bottom: 40%;
    width: 350px;
    height: 350px;
}

.AceContact {
    margin-bottom: 10px;
}

.AceBottombar .AceSocial {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: #222; */
    color: #FFF;
    padding: 2.5em;
    transform: scale(1);
}

.AceBottombar .AceSocial .columns {
    width: 90%;
    margin: auto;
}

.AceBottombar h6 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    color: #FFF;
    font-size: 14px;
    background-color: #0066f5;
    padding: 1.3em;
}

.AceBottombar a {
    color: #F0F0F0;
}

@media screen and (max-width: 640px) {
    .AceBottombar .AceSocial .columns {
        width: 100%;
    }

    .AceBottombar .AceSocial {
    }

    .AceBottombar .AceSocialIllustration {
        left: 30%;
        bottom: 86%;
        width: 200px;
        height: 200px;
    }
}
</style>

