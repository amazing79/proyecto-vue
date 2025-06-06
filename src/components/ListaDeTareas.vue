<script setup>
  import {ref} from 'vue';

  const tareas = ref([]);
  const newTask = ref('');

  const addTask = () => {
    tareas.value.push(newTask.value);
    newTask.value = '';
  }

  const removeTask = (idx) => {
    tareas.value.splice(idx, 1);
  }

</script>

<template>
  <div>
    <h2>Lista de tareas</h2>
    <input type="text" v-model="newTask" @keyup.enter="addTask">
    <ul>
      <li v-for="(tarea, idx) in tareas" :key="idx">
        {{tarea}}
        <button @click="removeTask">X</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
