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
    <div v-for="(items, type) in buildStore.grouped" :key="type">
        <h3>{{ type }}</h3>
        <hr/>
        <ul>
            <li v-for="(item, index) in items" :key="item.name">
                {{ item.name }}
                <span v-if="item.quantity > 1"> x{{ item.quantity }}</span>
                {{ item.price }}€
                <button @click="buildStore.treureCarret(index, type)">Eliminar</button>
            </li>
        </ul>
    </div>

    <p>
        Total: {{ buildStore.preuTotal }} €
    </p>
    <button @click="buildStore.pagar">Pagar</button>
</template>