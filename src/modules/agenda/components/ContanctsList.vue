<script setup>
  import { defineProps } from 'vue';
  import BtnDelete from './BtnDelete.vue';

  const props = defineProps({
    title: {
      type: String,
      default: 'Resultados'
    },
    data : {
      type: Array,
      default: new Array(),
    }
  });

  function deleteContact(key) {
    let temp = props.data;
    temp.splice(key, 1);
    console.log(`eliminado el nro ${key}!`);
  }
</script>

<template>
  <div class="search">
      <h2> {{ props.title }}</h2>
      <div v-show="data.length > 0">
        <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Numero</th>
            <th scope="col">Mail</th>
            <th scope="col" colspan="2">acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in props.data" :key="contact['id']">
            <td>{{ contact.id}}</td>
            <td>{{ contact.name }}</td>
            <td>{{ contact.phone }}</td>
            <td>{{ contact.email }}</td>
            <td><button>Editar</button></td>
            <td><BtnDelete :action-delete="deleteContact"></BtnDelete></td>
          </tr>
        </tbody>
      </table>
      </div>
  </div>
</template>

<style lang="css" scoped>
</style>
