<template>
  <section class="AceHomePage">
    <div class="AceBackdrop">
      <div class="AceOverlay">
        <div class="columns AceFullHeight">
          <div class="col-5 col-sm-12 column AceCatchPhrases">
            <h1 class="h1 BRFirmaBold" v-html="catchPhrases[0]" >
            </h1>
            <h2 class="h2  BRFirmaRegular" v-html="catchPhrases[1]">

            </h2>
            <div class="mt-1 mb-1">
              <button class="AceSquareEdgeBtn">
                <i class="mdi mdi-26px mdi-web"></i>
                Start Learning
              </button>

                <button class="AceSquareEdgeBtn">
                <i class="mdi mdi-26px mdi-web"></i>
                Join and Learn
              </button>
            </div>
          </div>


          <!-- LeftColumn Header -->
          <div class="column AceCentre col-7 hide-sm">
                <intro-reg-sign step="1"/>
              <img class="AceBannerImg" src="/img/student.png" alt="from freepik"/>
            <i class="AceCatchPhrasesPointer icon icon-2x icon-arrow-down" />

          </div>

        </div>

      </div>
    </div>
    <about />
    <login />
    <learning-type />
    <testimonials />
  </section>
</template>

<script>
import About from '~/components/About'
import LearningType from '~/components/LearningType'
import Testimonials from '~/components/Testimonials'
import IntroRegSign from '~/components/IntroRegSign'
import Login from '~/components/Login'

export default {
  name: 'HomePage',
  components: {
    About,
    LearningType,
    Testimonials,
    IntroRegSign,
    Login
  },
  head () {
            return {
                meta: [
                    {
                        name: 'description',
                        content: 'Paxielib'
                    },
                    {
                      name: 'twitter:card',
                      content: 'summary'
                    },
                     {
                      name: 'twitter:site',
                      content: '@paxielib'
                    },
                    {
                      name: 'twitter:creator',
                      content:'@paxielib'
                    },
                    {
                      name: 'twitter:title',
                      content: 'Paxielib'
                    },
                    {
                      name: 'twitter:decription',
                      content: 'Paxielib'
                    }
                ],
                title: 'Paxielib'
            }
        },
  data () {
    return {
      catchPhrases: [
        'IDENTIFY THE SCHOLAR IN YOU',
        'We are keen about making you a maestro; equipping you for your exams with our <bold>Rich Lessons Bank</bold>',
        'You can <strong>Learn Anywhere, Anytime</strong> online. Get Started for Free',
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
