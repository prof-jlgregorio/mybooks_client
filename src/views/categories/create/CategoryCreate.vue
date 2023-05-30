<template>
    <div>
        
        <h2>Cadastrar Nova Categoria</h2>
        <hr>
        <form v-on:submit.prevent="create">
            <input type="text" name="" v-model="name">
            <button type="submit">Cadastrar</button>            
        </form>

    </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios";
import baseUrl from '@/api_config.js'

//..binding to the form
const name = ref("")

//..function to create a new category
const create = () => {
    axios.post(baseUrl + '/api/category/v1', 
        {
            name : name.value
        }
    ).then((response) => {
        alert("Categoria Cadastrada com Sucesso!")
    }).catch((error => {
        alert("Erro: " + error)
    }))
}

</script>

<style lang="scss" scoped>

</style>