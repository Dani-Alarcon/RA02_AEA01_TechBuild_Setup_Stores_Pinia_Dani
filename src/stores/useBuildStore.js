import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'

export const useBuildStore = defineStore('BuildStore', () => {
    // State
    const components = ref([])

    //Guardar recargar
     const guardat = localStorage.getItem('hardware-guardat')
    if (guardat) {
       components.value = JSON.parse(guardat) 
    }
    watch(components, (nouValor) => {localStorage.setItem('hardware-guardat', JSON.stringify(nouValor))}, { deep: true })

    // Getters
    const preuTotal = computed(() => components.value.reduce((acumulador, elemento) => acumulador + elemento.price, 0))
    const grouped = computed(() => groupBy(components.value, 'type'))
    // Action
    function afegir(item) {
        components.value.push(item)
        console.log('Afegit')
        console.log(components.value)
    }
    function treureCarret(index, type) {
        const grouped = groupBy(components.value, 'type')
        const items = grouped[type] || []

        for (let i = 0; i < components.value.length; i++) {
            if (components.value[i].name === items[index].name) {
                components.value.splice(i, 1)
                break
            }
        }
    }
    function pagar() {
        
        alert(`Has pagat ${preuTotal.value}€`)
        components.value = []
    }
    return { components, preuTotal, grouped, afegir, treureCarret, pagar }
})