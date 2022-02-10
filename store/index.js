// import { stat } from "fs"

export const state = () => ({
    //App Name
    appName: 'ACE',
    //Links in App
    links: {
        //Main Menu Links
        main: [
            { name: 'About', link: '#about' },
            { name: 'Get in Touch', link: '#get-in-touch' },
            { name: 'Get Started', link: '#register' },
            { name: 'Have an Account?', link: '#register' }
        ],
        //Get in touch bottom bar items
        contacts: [
            { icon: 'facebook', name: '@AceWorld', link: 'https://fb.me/ace' },
            { icon: 'twitter', name: '@AceWorld', link: 'https://twitter.com/AceAlevels' },
            { icon: 'rss', name: 'Our Blog', link: 'https://blog.ace.com' },
            { icon: 'whatsapp', name: '+234-813-560-6728', link: 'https://api.whatsapp.com/send?phone=2348135606728&text=Hello%20Ace-ALEVELS%21%F0%9F%98%8A%20Please%20I%20would%20like%20to%20know%20more%20about%20IJMB%20and%20how%20to%20go%20about%20the%20registration%20process...%20Thanks&source=&data=' },
            { icon: 'email', name: 'mail@aceworld.com', link: 'mailto://mail@aceworld.com' },
            { icon: 'phone', name: '+234-813-560-6728', link: 'phone://+2348135606728' }
        ],

        footerColumnA: [
            { name: 'Mission', link: '/mission' },
            { name: 'Career', link: '/career' },
            { name: 'Press', link: '/press' },
            { name: 'Partner with us', link: '/partner' }
        ],
        footerColumnB: [
            { name: 'Cadlix', link: 'https://cadlix.com' },
            { name: 'AceLite', link: '#' },
            { name: 'AceQBank', link: 'https://aceworldqbank.com' }
        ]
    }
})

export const getters = {
    appName: state => state.appName,
    mainLinks: state => state.links.main,
    contacts: state => state.links.contacts,
    footerColumnA: state => state.links.footerColumnA,
    footerColumnB: state => state.links.footerColumnB
}

export const actions = {}

export const mutations = {}
