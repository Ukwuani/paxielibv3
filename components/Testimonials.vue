<template>
    <section class="AceTestimonials" id="testimonials">
        <h1 class="h3 text-center my-1 Fredoka text-primary">What Our Students Have To Say</h1>
        <h1 class="h2 text-center my-1 Fredoka">Students Community Feedback</h1>
        <div class="AceTestimonial columns AceCategory">
            <div class="column col-4 col-sm-12 col-md-6" v-for="testimonial in testimonials" :key="testimonial.author">
                <div class="AceTestimonialImage">
                    <img :src="testimonial.image" :alt="'Picture of ' + testimonial.author" v-if="testimonial.image" />
                    <i class="icon icon-people icon-2x" v-else></i>
                </div>
                <h6 class="h5 text-bold">{{ testimonial.author }}</h6>
                <h2 class="h6">{{ testimonial.package }}</h2>
                <p>
                    {{ testimonial.comment }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'testimonials',
        data () {
            return {
                testimonials: [
                    {
                        author: 'Dotun Aboyeji',
                        image: '/img/student.png',
                        comment: "I can proudly say that I\'m one of the lucky people who joined learning on PaxieLib, I'm now a 200 Level Student of Chemistry in the University of Ilorin! If you want to learn, learn here...",
                        package: ' Chemistry Scholar'
                    },
                    {
                        author: 'Uwana Gift',
                        image: '/img/student.png',
                        comment: "The day i found out about PaxieLib, my learning habit changed, Lot's of science courses got more interesting.{Now a nursing student of University of Ibadan} Don't wait start now, it's free...",
                        package: 'Biology Scholar'
                    },
                    {
                        author: 'Olayemi Shola',
                        image: '/img/student.png',
                        comment: "My sister and I started learning on PaxieLib after facing many challenges in lots of subjects. Right now, we have got a hang of it and we are really excited at the opportunity of learning. Don't hesitate, Start!!'",
                        package: 'PaxieLib Scholar'
                    },
                    
                    {
                        author: 'Kuburat O. Olanrewaju',
                        image: '/img/student.png',
                        comment: "My sister and I started learning on PaxieLib after facing many challenges in lots of subjects. Right now, we have got a hang of it and we are really excited at the opportunity of learning. Don't hesitate, Start!!'",
                        package: 'PaxieLib Scholar'
                    },
                    {
                        author: 'Princess Udochi',
                        image: '/img/student.png',
                        comment: "My sister and I started learning on PaxieLib after facing many challenges in lots of subjects. Right now, we have got a hang of it and we are really excited at the opportunity of learning. Don't hesitate, Start!!'",
                        package: 'Math Scholar'
                    },
                    {
                        author: 'Janet Udochi',
                        image: '/img/student.png',
                        comment: "Got admited to study linguistics, it took me less than a week to finish up my syllabus for the semester, Nothing is looking alien to me anymore, I had a very good foundation with extra lessons on PaxieLib Courses.",
                        package: 'English Scholar'
                    }
                ]
            };
        }
    }
</script>

<style scoped>
.AceTestimonials {
    background: #F0F0F0;
    padding-top: 3em;
    /* position: relative; */
}

.AceTestimonials .AceTestimonial {
    /* transform: scale(1); */
}

.AceTestimonials .AceTestimonial .column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.AceTestimonialImage {
    margin-bottom: 1em;
    border-radius: 100%;
    width: 5em;
    height: 5em;
    border: 1px solid #F0F0F0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.AceTestimonialImage img {
    width: 5em;
    height: 5em;
    border-radius: 100%;
    /* filter: grayscale(20); */
}

.AceTestimonial p {
    text-align: center;
    margin: auto;
    width: 85%;
    color: #777;
}

@media screen and (max-width: 360px) {
    .AceTestimonial p {
        font-size: 14px;
    }
}
</style>
