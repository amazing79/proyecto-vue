<script setup>
import { ref, watch, onMounted } from "vue";

const pDialog = ref(null); 
const emit = defineEmits(['closeModal'])


const props = defineProps({
    show:{
        type:Boolean,
        default:false,
    }
})

function closeDialog() {
   emit('closeModal', false)
}

watch(() => props.show, (newValue) => {
    if(newValue) {
        pDialog.value.showModal();
    } else {
       pDialog.value.close();
    }
})

// Emitir cierre si se cierra manualmente (ej. con ESC)
onMounted(() => {
  pDialog.value.addEventListener('close', () => {
    emit('closeModal', false)
  })
})
 
</script>
<template>
    <dialog ref="pDialog">
        <div class="dialog__title">
            <h3>Sistema SCG</h3>
        </div>
        <div class="dialog__body">
            <form id="itemForm" class="user-form" method="dialog">
                <label for="descripcion">Descripción:</label>
                <input type="text" id="descripcion" name="descripcion" required>
                <div class="button-panel">
                    <button type="submit" class="btn submit">Aceptar</button>
                    <button type="button" class="btn cancel" @click="closeDialog">Cancelar</button>
                </div>
            </form>
        </div>
    </dialog>
</template>

<style scoped>
   dialog{
    width: 90%;
    max-width: 640px;
    margin: 10% auto;
    border-radius: 8px;
    border: none;
}

.dialog__title{
    width: 100%;
    background-color: var(--bg-main-color);
    text-align: center;
    color: #2c237b;
    padding: 4px;
}

.dialog__body{
    padding: 10px;
}

::backdrop {
    background-color: #23292e;
    opacity: 0.75;
}

button{
    color: rgb(186, 12, 12);
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
}

button.submit {
    background-color: #007bff;
}

button.cancel {
    background-color: #6c757d;
}

</style>