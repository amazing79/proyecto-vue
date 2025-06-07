<script setup>
  import { ref } from 'vue'
  const contador = ref(0);

  function incrementar(){
    contador.value++;
  }

  function decrementar(){
    contador.value--;
  }

</script>
<template>
  <div>
    <p>Valor actual: {{ contador }}</p>
    <button @click="incrementar">Add</button>
    <button @click="decrementar">Sub</button>
  </div>
</template>
