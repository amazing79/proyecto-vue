import { ref } from 'vue'
import { defineStore } from 'pinia'
//por convencion, se usa la palabra use para definir la store
export const useRegistrarStore = defineStore('registrar', () => {
  const nombre = ref('');
  const email = ref('');
  const guardarRegistro = (nombreForm, emailForm) => {
    nombre.value = nombreForm;
    email.value = emailForm;
  }

  return { nombre, email, guardarRegistro }
})
