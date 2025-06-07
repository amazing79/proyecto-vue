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
    <span>{{ weatherStore.temperatura }}</span>
</template>

<style scoped>

</style>
