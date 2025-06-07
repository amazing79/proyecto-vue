<script setup>
 import WeatherApi from './WeatherApi.vue';
</script>

<template>
  <div class="header">
    <h3>La temperatura actual es: <WeatherApi></WeatherApi></h3>
  </div>
  
</template>

<style scoped>
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #333;
    color: #fafafa;
  }

  h3{
    margin:  0;
  }
</style>
