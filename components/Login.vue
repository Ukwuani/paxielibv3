<template>
    <section class="AceLogin" id="login">
        <h1 class="h2 text-center my-4 Fredoka text-primary"> Join and Learn Now </h1>
        <div class="AceCategory">
            <div class="columns">
                <div class="column col-sm-12" >
                   <div>
                        <h1 class="h3 text-center my-3 text-gray ">SignUp Start Now</h1>
                        <input type="email" name="email" placeholder="Enter Fullname"/>
                        <input type="email" name="email" placeholder="Enter Email Address"/>
                        <input type="password" name="password" placeholder="Enter Password"/>
                        <button class="AceSquareEdgeBtn column col-4">
                            Sign Up
                        </button>
                    </div>
                </div>

                  <div class="divider-vert hide-sm" data-content="OR"></div>


                <div class="column col-sm-12">
                    <div>
                        <h1 class="h3 text-center mt-4 mb-3 text-gray ">Login To Continue</h1>
                        <input type="email" name="email" placeholder="Enter Email Address"/>
                        <input type="password" name="password" placeholder="Enter Password"/>
                        <div class="columns">
                            <button class="AceSquareEdgeBtn column col-4">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'register',
        data () {
            return {
                email:'',
                password:'',
            }
        }
    }
</script>

<style scoped>
.AceLogin {
    margin: 0 auto;
    padding-top: 20em;
    text-align: left;
    display: flex;
    align-items: left;
    justify-content: left;
    flex-direction: column;
    min-height: 80vh;
    padding: 2em 0 0;
    background-color: #e6f0ff;
}

.AceLogin div.columns {
    margin: 0 auto;
}

.AceLogin img {
    height: 5rem;
    margin-bottom: -.4em;
    margin-left: -.6em;
    margin-right: -.6em;
}

.AceLogin div.AceCategory {
     position: relative;
}

.AceLogin input {
    padding: .8em;
    width: 100%;
    height: 4em;
    border-radius: .5em;
    margin: .5em auto;
    border: none;
    text-align: justify;
    color: #777;
    background-color: #ffffff !important;
}

.AceLogin button {
    height: 4em;
    border: none;
    width: 100%;
    margin: .5em auto;
    text-align: center;
    color: #fff;
    background: #0066f5;
}

@media screen and (max-width: 640px) {
    .AceLogin p {
        font-size: 14px;
    }

    .AceLogin button {
        font-size: 14px;
    }
}
</style>
