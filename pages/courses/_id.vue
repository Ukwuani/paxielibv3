<template>
  <section class="AceHomePage">
    <div v-if="courses!=null" class="AceCourses columns">
                
            <n-link
                v-for="course in courses[dept]"
                :key="course._id"
                :to="course.url"
                class="column col-3 col-sm-12 col-md-6">
                <div class="card">
                    <div class="card-image">
                        <img :src="options[0].image" class="img-responsive">
                    </div>

                    <div class="card-header">
                        <div class="card-title h4">
                            {{ course.course }}
                        </div>
                        <div class="subtitle has-text-black-bis text-" :title="options[0].subtitle">
                            {{ course.description }}
                        </div>
                    </div>

                    <!-- <div class="card-footer">
                        <router-link :to="option.link" class="btn btn-primary btn-action s-circle float-right">
                            <i class="icon icon-forward"></i>
                        </router-link>
                    </div> -->
                </div>
            </n-link>
    </div>


  </section>
</template>

<script>
import Card from '~/components/Card'
import Courses from '~/db/courses.json'

export default {
  name: 'LearnPage',
  components: {
    Card
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
                courses: Courses,
                options: [
                    {
                        image: '/img/student.png',
                        title: 'Arts',
                        subtitle: 'Lit-in-English and many more interesting courses',
                        link: '/learn'
                    }
                ]
            }
        },

  asyncData ({params, redirect}) {
    if (!Courses[params.id]) redirect('/');
    return {dept: params.id};
  },

//   async asyncData({params, $axios }) {
//       const depts = {
//           arts: "arts",
//           science: "sciences",
//           social: "social",
//           commercial: "commercial"
//       }
//     //   const courses = await $axios.$get(`/api/courses?${(depts[params.course]) ? 'department=' + depts[params.course] : ''}`, {department: depts[params.course]})
     
//     //   return { courses }
//     },



}
</script>

<style scoped>
section.AceHomePage {
  margin-top: 6em;
  min-height: 70vh;
}

.AceRegistrationOptions h1 {
    padding: 1em 0;
}

.AceCourses .column .card {
    border: 1px solid #F5F5F5;
    padding-bottom: 2em;
}

.AceCourses .column .card:hover {
    background: #F5F5F5;
}

.AceCourses {
    margin: auto;
    text-align: center;
} 

.subtitle {
    color: #242424;
    font-size: 13px;
}

a {
    color: #222;
    text-decoration: none;
}
</style>
