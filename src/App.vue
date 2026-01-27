<script setup>
import NavBar from './components/NavBar.vue'
import ComponentCard from './components/ComponentCard.vue';
import {useHardwareStore} from '@/stores/useHardwareStore'
import { storeToRefs } from "pinia";

const componentStore = useHardwareStore()
componentStore.loadHardware()

const {componentRef} = storeToRefs(useHardwareStore())
</script>

<template>
  

  <main>
    <NavBar />
    <h1>Components:</h1>
    <ComponentCard v-for="component in componentRef" :key="component.name" :component="component" />
  </main>
</template>

<style scoped>
body, html{
  width: 100%;
}
</style>
