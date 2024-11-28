<script setup>
import { RouterLink, RouterView } from 'vue-router'
import data from '@/assets/data.json';

let jsonData = data;
console.log(jsonData);

</script>

<template>
  
  <header>
    <nav id="nav">
      <ul>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-for="(country, index) in jsonData.destinations" :key="index" :to="'/countryDetails/'+country.id">{{ country.name }}</RouterLink>
      </ul>
    </nav>
  </header>
  <div class="container">
    <RouterView />
  </div>

</template>

<style scoped></style>
