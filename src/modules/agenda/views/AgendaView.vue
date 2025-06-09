<script setup>
import { ref } from 'vue';
import ContanctsList from '../components/ContanctsList.vue';
import SearchContacts from '../components/SearchContacts.vue';
import { getAllContacts } from '@/helpers/apiContacts';

const filteredContacts = ref(getAllContacts());
const contacts = ref(getAllContacts());

const showKword = (kword) => {
  if(kword.trim() !== '') {
    filteredContacts.value = contacts.value.filter( item => {
      return item.name.toLocaleLowerCase().includes(kword.toLocaleLowerCase());
  });
  } else {
    filteredContacts.value = contacts.value;
  }
}

const cleanSearch = () => {
    filteredContacts.value = contacts.value;
}

</script>

<template>
  <div class="container__agenda">
    <section class="search-bar">
      <SearchContacts @filterContact="showKword" @cleanSearch="cleanSearch"></SearchContacts>
    </section>
    <section class="contact-list">
      <ContanctsList title="Resultados de la busqueda" :data="filteredContacts"></ContanctsList>
    </section>
  </div>
</template>

<style lang="css" scoped>
</style>
