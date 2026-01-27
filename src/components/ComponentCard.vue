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
  <duv class="card">
    <img :src="`../images/${component.image}`" class="mb-3" width="200" />
    
    <p>
      {{ component.name }} - {{component.price}}€
   
    </p>
  </duv>
</template>
