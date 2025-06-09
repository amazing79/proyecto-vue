<script setup>
  import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';

  const registrarStore = useRegistrarStore();

</script>

<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Email: {{ registrarStore.email }}</h3>
    <ul>
      <li>
        <router-link to="/agenda">
        Agenda
        </router-link>
      </li>
      <li>
        <router-link to="/contador">
        Contador
        </router-link>
      </li>
      <li>
        <router-link to="/tareas">
          Tareas
        </router-link>
      </li>
       <li>
        <router-link to="/registrar">
          registrar
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .sidebar{
    width: 300px;
    background-color: #f0f0f0;
    padding: 20px;
  }
</style>
