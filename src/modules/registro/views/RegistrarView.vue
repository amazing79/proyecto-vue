<script setup>
    import { ref } from 'vue';
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import { schema } from '../schemas/validationSchema';
    import { useRegistrarStore} from '../stores/registrarStore'

    const nombre = ref('');
    const email = ref('');

    const registrarStore = useRegistrarStore();

    const onSubmit = () => {
        registrarStore.guardarRegistro(nombre.value, email.value)
        console.log('Se envio correctamente');
    }
</script>

<template>
    <div>
        <h2>Formulario de Registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre: </label>
                <Field type="text" placeholder="Ingrese su nombre" name="nombre" id="nombre" v-model="nombre"/>
                <ErrorMessage name="nombre">Debe ingresar un nombre</ErrorMessage>
            </div>
            <div class="form">
                <label for="email">Email: </label>
                <Field type="email" placeholder="Ingrese su email" name="email" id="email"  v-model="email"/>
                <ErrorMessage name="email">Debe ingresar un email</ErrorMessage>
            </div>
            <div class="form">
                 <button type="submit">Enviar</button>
            </div>
        </Form>
    </div>
</template>

<style scoped>
    .form{
        margin-bottom: 10px;
    }
</style>