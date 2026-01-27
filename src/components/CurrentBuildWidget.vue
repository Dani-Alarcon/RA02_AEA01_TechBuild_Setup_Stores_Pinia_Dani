<script setup>
// imports
import { ref } from "vue";

import { useBuildStore } from "@/stores/useBuildStore.js";
const buildStore = useBuildStore()
// data
const active = ref(false);
</script>
<template>
    
    <h1>Componentes del teu pc</h1>
</template>