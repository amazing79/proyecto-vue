<script setup>
  import { ref } from 'vue';

  const text = ref('');

  const emit = defineEmits(['filterContact', 'cleanSearch'])

  const dispatchEvent = () => {
    emit('filterContact', text.value)
  }

  const cleanEvent = () => {
    emit('cleanSearch')
  }
</script>

<template>
  <div class="search">
    <h2>Lista de Contactos</h2>
    <input type="text" placeholder="Buscar.." v-model="text" @keypress="dispatchEvent">
    <button @click="dispatchEvent">Buscar</button>
     <button @click="cleanEvent">Limpiar</button>
  </div>
</template>

<style lang="css" scoped>
</style>
