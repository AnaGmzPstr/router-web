<script setup>
import { RouterLink, RouterView } from 'vue-router'
import data from '@/assets/data.json';

let jsonData = data;

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
    <!-- <transition name="fade" mode="out-in"> -->
      <RouterView :key="$route" />
    <!-- </transition> -->
  </div>

</template>

<style scoped>
/* NOTA: He provat les animacions però s'aplicaben 
a totes la pàgines i no he sapigut arreglar-ho */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s, transform .5s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(30%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
