import { defineStore } from 'pinia'
import { ref } from 'vue'

export const UserSessionStore = defineStore('UserSessionStore', () => {

    const usuari = ref("Guest Builder")
    
    const gitHub = () => {
        const githubUser = 'Dani-Alarcon'
        window.open(`https://github.com/${githubUser}`, '_blank')
    }

    return { usuari, gitHub }
})