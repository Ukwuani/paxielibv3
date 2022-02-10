<template>
  <section class="AceHomePage">
    <div class="AceBackdrop">
      <div class="AceOverlay">
        <div class="AceVideoView">
         <iframe id="ytplayer" type="text/html" width="640" height="360"
          src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameborder="0"></iframe>


         
        </div>

      </div>
    </div>
    


  </section>
</template>

<script>

export default {
  name: 'LearnPage',
  components: {
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
        'Identify the <b> SCHOLAR IN YOU</b>',
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
