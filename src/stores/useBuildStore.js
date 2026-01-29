import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'

export const useBuildStore = defineStore('BuildStore', () => {
    // State
    const components = ref([])
    // Getters
    const preuTotal = computed(() => components.value.reduce((acumulador, elemento) => acumulador + elemento.price, 0))
    const grouped = computed(() => groupBy(components.value, 'type'))
    // Action
    function afegir(item) {
        components.value.push(item)
        console.log('Afegit')
        console.log(components.value)
    }
    const treureCarret = (itemName) => (components.value = components.value.filter(item => item.name !== itemName))
    function checkout() {
        alert('Has pagat')
    }
    return { components, totalPrice: preuTotal, grouped, afegir, treureCarret, checkout }
})