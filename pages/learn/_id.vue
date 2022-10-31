<template>
  <section class="AceHomePage">
    <div class="AceBackdrop">
      <div class="AceOverlay">
        <div id="learn" class="AceVideoView">
         <iframe id="player" type="text/html" width="100%" height="100%"
          :src="`https://www.youtube.com/embed/${src}?autoplay=0&origin=https://paxielib.herokuapp.com`"
          frameborder="0"></iframe>
        </div>
      </div>
    </div>

      <div class="AceLesson">
        <div class="accordion" v-for="(topic, index) in lessons[course].topics" :key="topic">
          <input type="checkbox" :id="`accordion-${index}`" name="accordion-checkbox" hidden>
          <label class="accordion-header" :for="`accordion-${index}`">
            {{topic}} <span class="mx-2 text-gray"> &#8226; 
              {{lessons[course][topic].length}} 
              lessons</span>
          </label>
            <div class="accordion-body">
              <ul class="menu menu-nav">
                <li class="menu-item" v-for="lesson in lessons[course][topic]" :key="lesson.url" >
                  <a :href="`#${lesson.url}`" v-on:click="chooseVideoToPlay(lesson.url)">
                    {{lesson.title}}  <span class="mx-2 text-gray"> &#8226;   {{lesson.description}}  &#8226;</span>  <span class="chip text-light bg-warning">{{lesson.duration}}</span>
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    


  </section>
</template>

<script>
import Lessons from '~/db/lessons.json'
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
      src: "cM_-a7jxJLs",
      lessons: Lessons,
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
  methods: {
    chooseVideoToPlay (src) {
      this.src = src;
    }
  },
  asyncData ({params, redirect}) {
    if (!Lessons[params.id]) redirect('/courses');
    return {course: params.id};
  }

}
</script>
<style scoped>
.AceHomePage {
  min-height: 140vh;
}

div.AceLesson {
  min-height: 80vh;
  width: 90%;
  margin: 3em auto
}

.AceVideoView iframe {
  margin-top: 5em;
  border-radius: .8em;
}

div.accordion label {
  background-color: #e6f0ff;
  min-height: 3em;
  border-radius: .8em;
  padding: 1.1em;
  font-size: 1.5em;
  margin: .3em auto;
}

div.accordion-body {
  background-color: #e6f0ff;
  margin: auto 1em;
  border-radius: 0 0 .8em .8em;

}


div.accordion-body a{
  padding: 1em;
  margin: .4em 1em;
  border-radius: .8em;

}
</style>
