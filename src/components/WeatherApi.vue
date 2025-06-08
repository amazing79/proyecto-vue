<script setup>
   import {useWeather} from '../composables/useWeather';
   import { onMounted } from 'vue';
   import { useWeatherStore } from '@/stores/weatherStore';

   const weatherStore = useWeatherStore()
   
    onMounted( () => {
        useWeather()
    })
</script>

<template>
    <h3>La temperatura actual es: <span>{{ weatherStore.temperatura }}</span>º</h3>
</template>

<style scoped>
 h3{
    margin:  0;
  }
</style>
