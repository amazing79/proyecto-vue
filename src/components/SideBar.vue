<script setup>

</script>

<template>
  <div class="sidebar">
    <h2>SideBar</h2>
    <ul>
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
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
  }
</style>
