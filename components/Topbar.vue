<template>
    <section class="AceTopbar">
        <div>
            <ace-title-bar/>           
            <div class="AceTopbarLinks">
                <ul class="desktop-nav">
                    <li v-for="link in content " :key="link.link">
                        <a :href="link.link" v-text="link.name"></a>
                    </li>
                </ul>
                
                <button class="btn btn-action s-circle" @click="active = true">
                    <i class="icon icon-menu"></i>
                </button>
            </div>
        </div>

            <!-- Mobile Menu -->
            <div class="modal modal-sm" :class="{ active }">
                <div @click="active = false" class="modal-overlay" aria-label="Close"></div>
                <div class="modal-container">
                    <div class="modal-header">
                        <button
                            @click="active = false"
                            class="btn btn-clear float-right text-light"
                            aria-label="Close">
                        </button>
                        <div class="modal-title h5 text-light">
                            Menu
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="content">
                            <ul class="mobile-nav">
                                <li v-for="link in content" :key="link.name">
                                    <a
                                        class="Fredoka text-light"
                                        :href="link.link"
                                        v-text="link.name"
                                        @click="active = false">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        

    </section>
</template>

<script>
import AceTitleBar from '@/components/TitleBar'
export default {
    name: 'topbar',
    props: {
        content: {
            type: Array,
            required: true
        },
        titleHeader: {
            type: String,
            required: false
        }
    },
    components: {
        AceTitleBar
    },
    data () {
        return {
            active: false
        }
    }
}
</script>

<style scoped>
.AceTopbar {
    background-color: #0066f5;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 20000;
}

.AceTopbarLinks {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.AceTopbar > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
    height: 4.5em;
    width: 95%;
    margin: auto 1% auto;
}

.AceTopbar .desktop-nav li {
    display: inline-block;
    margin-left: 40px;
}

.mobile-nav {
    margin: 0;
    padding: 0;
    list-style: none inside;
}

.mobile-nav li a {
    display: block;
}

.AceTopbar .desktop-nav a {
    font-weight: bold;
    font-size: 15px;
    /* letter-spacing: 0.8px; */
    color: #FAFAFA;
    /* text-transform: uppercase; */
}

.AceTopbar button {
    display: none;
}

.AceTopbar .modal-container {
    background: #0066f5;
}

@media screen and (max-width: 640px) {
    .AceTopbar {
        background-color: #0066f5;
        /* transform: scale(1.005); */
    }

    .AceTopbar > div:first-child {
        width: 95%;
    }

    .AceTopbar .desktop-nav li {
        display: none;
    }

    .AceTopbar button {
        display: block;
    }
}

@media screen and (max-width: 768px) {
    .AceTopbar > div:first-child {
        width: 95%;
    }
}
</style>
