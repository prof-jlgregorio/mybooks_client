<template>
  <div>
    <h1>MyBooks Client</h1>
    <nav>
      <!-- router link to create the links -->
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>
          Categorias
          <ul>
            <li><router-link to="/categories/create">Cadastrar</router-link></li> 
            <li><router-link to="/categories">Listar</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- router view to show the component -->
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style scoped></style>
