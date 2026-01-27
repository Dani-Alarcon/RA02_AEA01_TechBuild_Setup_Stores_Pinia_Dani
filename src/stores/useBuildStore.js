import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { groupBy } from 'lodash'

//Carrito
export const useBuildStore = defineStore('buildStore', () => {
    //state
    const items = ref([])

    //getters
    const count = computed(() => items.value.length)
    const isEmpty = computed(() => count.value === 0)
    const grouped = computed(() => {
        const grouper = groupBy(items.value, (item) => item.name)
        const sorted = Object.keys(grouper).sort()
        let inOrder = {}
        sorted.forEach((key) => (inOrder[key] = grouper[key]))
        return inOrder

    })
    const total = computed(() => items.value.reduce((acumulador, elemento) => acumulador + elemento.price, 0))


    //actions
    function addToCart(contador, item) {
        contador = parseInt(contador)

        items.value.push(item)
        console.log(items.value)

    }

    function $reset() {
        items.value = []
    }

    const clearItem = (itemName) => (items.value = items.value.filter((item) => item.name != itemName))

    const setItemCount = (item, count) => {
        clearItem(item.name)
        addToCart(count, item)
    }

    return { items, addToCart, count, isEmpty, grouped, $reset, total, clearItem, setItemCount }
})