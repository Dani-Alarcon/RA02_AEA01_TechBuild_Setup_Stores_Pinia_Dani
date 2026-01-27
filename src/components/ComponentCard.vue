<script setup>
// imports
import { ref } from "vue";


// props
const props = defineProps({
  component: Object,
});

// emits
defineEmits(["addToCart"])

// data
//const count = ref(0);
</script>
<template>
  <div class="card">
    <img :src="`../images/${component.image}`" class="mb-3" width="200px" />
    
    <p>
      {{ component.name }} - {{component.price}}€
    </p>
    <button>Afegir Muntatge</button>
  </div>
</template>
<style scoped>
.card{
    background-color: rgb(228, 228, 228);
    width: 250px;
    text-align: center;
    margin-bottom: 10px;
}
.card button{
    width: 200px;
    background-color: blue;
    color: white;
    margin-bottom: 8px;
}
.card, .card button{
    border-radius: 8px;
    font-weight: bold;
}
.card button:hover{
    background-color: rgb(11, 109, 255);
}
.card button:active{
    background-color: rgb(0, 119, 255);
}
</style>