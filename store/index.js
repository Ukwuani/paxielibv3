// import { stat } from "fs"

export const state = () => ({
    //App Name
    appName: 'PaxieLib',
    //Links in App
    links: {
        //Main Menu Links
        main: [
            { name: 'About', link: '/#about' },
            { name: 'Get in Touch', link: '/#get-in-touch' },
            { name: 'Start Learning', link: '/#register' },
            { name: 'Join and Learn?', link: '/#register' }
        ],
        //Get in touch bottom bar items
        contacts: [
            { icon: 'facebook', name: '@AceWorld', link: 'https://fb.me/paxielib' },
            { icon: 'twitter', name: '@AceWorld', link: 'https://twitter.com/paxielib' },
            { icon: 'whatsapp', name: '+234-813-560-6728', link: 'https://api.whatsapp.com/send?phone=2349032676002&text=Hello%20PaxieLib%21%F0%9F%98%8A%20Please%20I%20would%20like%20to%20know%20more%20about%Learning%with%PaxieLib...%20Thanks&source=&data=' },
            { icon: 'email', name: 'mail@paxielib.com', link: 'mailto://mail@paxielib.com' },
            { icon: 'phone', name: '+234-903-267-6002', link: 'phone://+2349032676002' }
        ],

        footerColumnA: [
            { name: 'About', link: '/#about' },
            { name: 'Mission', link: '/mission' },
            { name: 'Partner with us', link: '/partner' }
        ],
        footerColumnB: [
            { name: 'Learn Arts', link: '/learn/arts' },
            { name: 'Learn Sciences', link: '/learn/science' },
            { name: 'Learn Social Sciences', link: '/learn/socialscience' }
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
