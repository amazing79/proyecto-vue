<script setup>
  import { ref, defineProps } from 'vue';

  const props = defineProps({
    actionDelete: {
      type: Function,
      default : () => {console.log('sin accion')}
    }
  })

  const showConfirmation = ref(false);

</script>

<template>
  <div v-if="!showConfirmation">
    <button @click="showConfirmation = true">Eliminar</button>
  </div>
  <div v-else>
    <button @click="props.actionDelete">Si</button>
    <button @click="showConfirmation = false">No</button>
  </div>
</template>
<style lang="css" scoped>
</style>
