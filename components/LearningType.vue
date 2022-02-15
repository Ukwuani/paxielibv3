<template>
    <div class="AceRegistrationOptions AceCategory" id="register">
        <h1 class="h2 text-center my-1 Fredoka text-primary">Start Learning Now</h1>
        <div class="AceOptions columns">
            <n-link
                v-for="option in options"
                :key="option.title"
                :to="option.link"
                class="column col-3 col-sm-12 col-md-6">
                <div class="card">
                    <div class="card-image">
                        <img :src="option.image" class="img-responsive">
                    </div>

                    <div class="card-header">
                        <div class="card-title h4">
                            {{ option.title }}
                        </div>
                        <div class="subtitle has-text-black-bis text-" :title="option.subtitle">
                            {{ option.subtitle }}
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
    </div>
</template>

<script>
    export default {
        name: 'registration-options',
        data () {
            return {
                options: [
                    {
                        image: '/img/student.png',
                        title: 'Arts',
                        subtitle: 'Lit-in-English and many more interesting courses',
                        link: '/learn/art'
                    },
                    {
                        image: '/img/student.png',
                        title: 'Scienses',
                        subtitle: 'Math, Biology, Chemistry, Physics... all covered',
                        link: '/learn/science'
                    },
                    {
                        image: '/img/student.png',
                        title: 'Social Science',
                        subtitle: 'Learn more on some social science courses',
                        link: '/learn/socialscience'
                    },
                    {
                        image: '/img/student.png',
                        title: 'Commercials',
                        subtitle: 'Get started with interesting these couses',
                        link: '/learn/commerce'
                    },
                ]
            };
        }
    }
</script>

<style scoped>
.AceRegistrationOptions h1 {
    padding: 1em 0;
}

.AceOptions .column .card {
    border: 1px solid #F5F5F5;
    padding-bottom: 2em;
}

.AceOptions .column .card:hover {
    background: #F5F5F5;
}

.AceOptions {
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
