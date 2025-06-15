<script setup>
    import { ref } from 'vue';
    import ModalDialog from './dialog/ModalDialog.vue';

    const show = ref(false);
    
</script>
<template>
    <div>
        <button @click="show = true">open</button>
    </div>
    <ModalDialog :show="show" @closeModal="show = false"></ModalDialog>
</template>