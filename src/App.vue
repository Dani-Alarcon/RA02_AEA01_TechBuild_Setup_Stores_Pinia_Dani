<script setup>
import NavBar from './components/NavBar.vue'
import ComponentCard from './components/ComponentCard.vue';
import { useHardwareStore } from '@/stores/useHardwareStore'
import { storeToRefs } from "pinia";
import { useBuildStore } from './stores/useBuildStore';
import CurrentBuildWidget from './components/CurrentBuildWidget.vue';


const componentStore = useHardwareStore()
componentStore.loadHardware()

const { componentRef } = storeToRefs(useHardwareStore())

const buildStore = useBuildStore()
</script>

<template>


  <main>
    <NavBar />
    <h1>Components:</h1>
    <section class="cards">
      <ComponentCard v-for="component in componentRef" :key="component.name" :component="component"
        @afegir="buildStore.afegir(component)" />
    </section>

  </main>
  <CurrentBuildWidget />
</template>

<style scoped>
body,
html {
  width: 100%;
}
.cards{
   display: flex;
  
  flex-wrap: wrap;
  gap: 10px;
}
</style>
