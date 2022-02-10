<template>
  <section class="AceHomePage container">
    <topbar :content="links"/>
    <nuxt />
    <bottombar />
    <back-to-top />
  </section>
</template>

<script>
import Topbar from '~/components/Topbar'
import Bottombar from '~/components/Bottombar'
import BackToTop from '~/components/BackToTop'


export default {
  name: 'HomePage',
  components: {
    Topbar,
    Bottombar,
    BackToTop,
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
      dateData: null,
      catchPhrases: [
        'You can be among over 200,000 candidates, who secure admission into the University of their choice annually',
        'We\'re creating new routes for alternative university admission',
        'No Jamb Required! Low Fees! Approved By NUC! Government Approved!'
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

