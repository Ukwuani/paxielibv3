<template>
    <div class="AceRegistrationOptions AceCategory" id="register">
        <h1 class="h2 text-center my-1 Fredoka text-primary">Registration</h1>
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
                        <div class="card-title h5">
                            {{ option.title }}
                        </div>
                        <div class="card-subtitle has-text-black-bis text-" :title="option.subtitle">
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
                        image: '/img/ijmb.png',
                        title: 'IJMB',
                        subtitle: 'Interim Joint Matriculation Board',
                        link: '/ijmb'
                    },
                    {
                        image: '/img/jupeb.png',
                        title: 'JUPEB',
                        subtitle: 'Joint Universities Preliminary Examinations Board',
                        link: '/jupeb'
                    },
                    {
                        image: '/img/nabteb.png',
                        title: 'NABTEB',
                        subtitle: 'Interim Joint Matriculation Board',
                        link: '/ijmb'
                    },
                    {
                        image: '/img/cambridge.png',
                        title: 'CAMBRIDGE',
                        subtitle: 'Oxford University',
                        link: '/ijmb'
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
}

.AceOptions .column .card:hover {
    background: #F5F5F5;
}

.AceOptions {
    width: 85%;
    margin: auto;
    text-align: center;
} 

a {
    color: #222;
    text-decoration: none;
}
</style>
