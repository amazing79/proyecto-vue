import { ref } from 'vue'
import { defineStore } from 'pinia'
//por convencion, se usa la palabra use para definir la store
export const useWeatherStore = defineStore('consultar-clima', () => {
  const temperatura = ref(0);
  const setTemperatura = (temp) => {
   temperatura.value = temp
  }

  return { temperatura, setTemperatura }
})