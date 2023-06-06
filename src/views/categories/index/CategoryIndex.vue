<template>
  <div>
    <h1>Categorias</h1>
    <div>
      <table class="table table-striped">
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Comandos</th>
        </tr>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td> 
              <router-link 
                :to="{ name: 'categories-update', params : { id: category.id } }">
                Editar</router-link> 
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import baseUrl from '@/api_config.js'
import { onMounted, ref } from 'vue'

const categories = ref()

//..function to get all categories from the API
const getAll = () => {
  axios
    .get(baseUrl + '/api/category/v1?page=0&size=10')
    .then(response => {
      categories.value = response.data._embedded.categories
    })
    .catch(error => {
      console.error('Erro: ', error)
    })
}

//..lifecycle hook: what will be done when the component is rendered
onMounted(() => {
  getAll()
})
</script>

<style scoped></style>
