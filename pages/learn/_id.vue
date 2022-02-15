<template>
  <section class="AceHomePage">
    <div class="AceBackdrop">
      <div class="AceOverlay">
        <div class="AceVideoView">
         <iframe id="ytplayer" type="text/html" width="100%" height="100%"
          :src="src"
          frameborder="0"></iframe>
        </div>
      </div>


      <div class="accordion AceCategory">
        <input type="checkbox" id="accordion-1" name="accordion-checkbox" hidden>
        <label class="accordion-header" for="accordion-1">
          Title
        </label>
          <div class="accordion-body">
            <ul class="menu menu-nav">
              <li class="menu-item"><a href="#accordions">Component 1</a></li>
              <li class="menu-item"><a href="#accordions">Component 2</a></li>
            </ul>
          </div>
      </div>

      <div class="accordion AceCategory">
        <input type="checkbox" id="accordion-2" name="accordion-checkbox" hidden>
        <label class="accordion-header" for="accordion-2">
          Title
        </label>
          <div class="accordion-body">
            <ul class="menu menu-nav">
              <li class="menu-item"><a href="#accordions">Component 1</a></li>
              <li class="menu-item"><a href="#accordions">Component 2</a></li>
            </ul>
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
      src: "https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com",
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
  asyncData ({params, redirect}) {
    return {course: params.id};
  }

}
</script>
<style scoped>
.AceHomePage {
  min-height: 140vh;
}

.AceVideoView iframe {
  margin-top: 5em;
  border-radius: .8em;
}
</style>
