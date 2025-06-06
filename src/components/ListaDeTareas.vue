<script setup>
  import {ref} from 'vue';

  const tareas = ref([]);
  const newTask = ref('');

  const addTask = () => {
    tareas.value.push(newTask.value);
    newTask.value = '';
  }

</script>

<template>
  <div>
    <h2>Lista de tareas</h2>
    <input type="text" v-model="newTask" @keyup.enter="addTask">
    <ul>
      <li v-for="(tarea, idx) in tareas" :key="idx">
        {{tarea}}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>
