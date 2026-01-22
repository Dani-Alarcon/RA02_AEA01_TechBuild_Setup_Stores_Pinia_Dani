import { defineStore } from 'pinia'
import { ref } from 'vue'
import products from '@/data/products.json'


export const useHardwareStore = defineStore('productStore', () => {
    //state
    const productRef = ref([])
    //const productRef = ref(products)
    
    //de moment no hi ha getter pero serian les computed
    //actions
    function loadHardware(){
        productRef.value = products
    }
    return { productRef, loadHardware }
})