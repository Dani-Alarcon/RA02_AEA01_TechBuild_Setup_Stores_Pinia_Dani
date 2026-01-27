import { defineStore } from 'pinia'
import { ref } from 'vue'
import components from '@/data/hardware.json'


export const useHardwareStore = defineStore('hardwareStore', () => {
    //state
    const componentRef = ref([])
    //const componentRef = ref(products)
    
    //de moment no hi ha getter pero serian les computed
    //actions
    function loadHardware(){
        componentRef.value = components
    }
    return { componentRef, loadHardware }
})