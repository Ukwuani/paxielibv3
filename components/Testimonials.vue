<template>
    <section class="AceTestimonials" id="testimonials">
        <h1 class="h2 text-center my-1 Fredoka text-primary">Testimonials</h1>
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
                        author: 'Omotayo S. Omolayo',
                        image: '/img/omotayo.jpg',
                        comment: "I can proudly say that I\'m one of the lucky people who enrolled for JUPEB, I'm now a 200 Level Student of Geophysics in the University of Ilorin! If you're seeking admission and you\'re here, then I think you're lucky too.",
                        package: 'JUPEB'
                    },
                    {
                        author: 'Okurame Zino-Gift',
                        image: '/img/gift.jpg',
                        comment: "The day i found out about IJMB is one of the best days of my life, aside for the fact that I have gained admission now the experienced gained will forever remain within me.{Now a nursing student of BOWEN University}",
                        package: 'IJMB'
                    },
                    {
                        author: 'Zeal Olayemi Blessing',
                        image: '/img/zeal.jpg',
                        comment: "I enrolled for IJMB A'level programme through Ace ALEVELS last year after! After years of seeking admission. Completing the 9-months of IJMB, I was offered admission to study Economics in the University of Ilorin.",
                        package: 'IJMB'
                    },
                    
                    // {
                    //     author: 'Richard O. Okediya',
                    //     image: '/img/richard.jpg',
                    //     comment: "Been hearing about IJMB for a very long time, but I didn't beleive the gist but I can now attest to the fact that I'm highly impressed with IJMB after being through with the programme(300Lev, Law Student, Unilorin)",
                    //     package: 'IJMB'
                    // },
                    {
                        author: 'Kuburat O. Olanrewaju',
                        image: '/img/kuburat.jpg',
                        comment: "It is interesting to note that IJMB & Ace ALEVLES are moving in the right direction to enhance academics performance by giving young people like myself the opportunity to further their edu! Keep up the good Job.",
                        package: 'IJMB'
                    },
                    // {
                    //     author: 'Emmanuel F. Menyaga',
                    //     image: '/img/emmanuel.jpg',
                    //     comment: "Been hearing about IJMB for a very long time, but I didn't beleive the gist but I can now attest to the fact that I'm highly impressed with IJMB after being through with the programme(300Lev, Law Student, Unilorin)",
                    //     package: 'IJMB'
                    // },

                    // {
                    //     author: 'Mary-Jane Obenwa',
                    //     image: '/img/maryjane.jpg',
                    //     comment: "Been hearing about IJMB for a very long time, but I didn't beleive the gist but I can now attest to the fact that I'm highly impressed with IJMB after being through with the programme(300Lev, Law Student, Unilorin)",
                    //     package: 'IJMB'
                    // },
                    {
                        author: 'Princess Udochi Moses',
                        image: '/img/princess.jpg',
                        comment: "I'm a proof of JUPEB admission, it took me less than seven months after I had wasted 3 years seeking university admission through JAMB;..I'm now a bonafide Veterinary Medicine student of Imo State University---{IMSU}.",
                        package: 'JUPEB'
                    },
                    {
                        author: 'Temitope A. Odukoya',
                        image: '/img/temitope.jpg',
                        comment: "I appreciate the opportunity JUPEB gave me and lots of people to realise our dreams. The program was fast and easy (I'm really grateful for the privilege) I'm now a final year Sociology student of University of Ilorin.",
                        package: 'JUPEB'
                    },
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
