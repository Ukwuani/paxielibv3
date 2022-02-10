<template>
  <section class="AceHomePage">
    <div class="AceBackdrop">
      <div class="AceOverlay">
        <div class="columns">
          <div class="col-6  column AceCatchPhrases">
            <h1 class="h1 BRFirmaBold" v-html="catchPhrases[0]" >
            </h1>
            <h2 class="h2 BRFirmaRegular" v-html="catchPhrases[1]">

            </h2>
            <div class="mt-1 mb-1">
              <button class="AceSquareEdgeBtn">
                <i class="mdi mdi-26px mdi-google-play"></i>
                Get on
                <b> Play Store</b>
              </button>

                <button class="AceSquareEdgeBtn">
                <i class="mdi mdi-26px mdi-apple"></i>
                Get on
                <b> App Store</b>
              </button>
            </div>
          </div>


          <!-- LeftColumn Header -->
          <div class="column AceCentre col-6 hide-sm">
                <intro-reg-sign step="1"/>
            <i class="AceCatchPhrasesPointer icon icon-2x icon-arrow-down" />

          </div>

        </div>

      </div>
    </div>
    <about />
    <!-- <registration-options /> -->
    <!-- <testimonials /> -->
  </section>
</template>

<script>
import About from '~/components/About'
import RegistrationOptions from '~/components/RegistrationOptions'
import Testimonials from '~/components/Testimonials'
import IntroRegSign from '~/components/IntroRegSign'

export default {
  name: 'HomePage',
  components: {
    About,
    RegistrationOptions,
    Testimonials,
    IntroRegSign
  },
  head () {
            return {
                meta: [
                    {
                        name: 'description',
                        content: 'Ace'
                    },
                    {
                      name: 'twitter:card',
                      content: 'summary'
                    },
                     {
                      name: 'twitter:site',
                      content: '@AceWorld'
                    },
                    {
                      name: 'twitter:creator',
                      content:'@AceWorld'
                    },
                    {
                      name: 'twitter:title',
                      content: 'AceWorld | QBank'
                    },
                    {
                      name: 'twitter:decription',
                      content: 'AceWorld'
                    }
                ],
                title: 'AceWorld'
            }
        },
  data () {
    return {
      catchPhrases: [
        'Identify the <b>ACE SCHOLAR YOU</b>',
        'We are keen about making you a maestro; equipping you for your exams with our <bold>Rich Question Bank</bold>',
        'You can <strong>Learn Anywhere, Anytime</strong> with our Apps. Get them for Free',
        'The Excellence money cannot afford'
      ]
    }
  },

  computed: {
    links () {
      return this.$store.getters.mainLinks
    },
  },

}
</script>
