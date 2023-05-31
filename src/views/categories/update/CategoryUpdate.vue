<template>
    <div>
        
        <h2>Atualizar Categoria</h2>
        <hr>
        <form v-on:submit.prevent="update">
            <input type="text" name="" v-model="category.name">
            <button type="submit">Atualizar</button>            
        </form>

    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue"
import axios from "axios";
import baseUrl from '@/api_config.js'
import router from "../../../router";
import { useRoute } from "vue-router";

//..instantiate the route object, to access route params
const route = useRoute()

//..binding the object to the form
const category = reactive({
    id: null,
    name: ''
})

//..function to create a new category
const update = () => {
    axios.put(baseUrl + '/api/category/v1', 
        category
    ).then((response) => {
        alert("Categoria Atualizada com Sucesso!")
        router.push("/categories")
    }).catch((error => {
        //alert("Erro: " + error)
        console.error(error)
    }))
}

onMounted(() => {
    axios.get( baseUrl + '/api/category/v1/' + route.params.id)
    .then((response) => {
        category.id = response.data.id,
        category.name = response.data.name
    })
    .catch((error) => {
        alert("Erro ao carregar a categoria!")
    })
})

</script>

<style lang="scss" scoped>

</style>