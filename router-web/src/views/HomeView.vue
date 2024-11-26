<script setup>
/* import Home from '../components/Home.vue' */
import data from '../assets/data.json'
const countryData = data
const pathImg = '../src/assets/images/'
</script>

<template>
  <main>
    <h1>All destinations</h1>
    <div v-for="(country, index) in countryData.destinations" :key="index" class="destination-details">

        <img :src="pathImg + country.image" :alt="country.name" />
        <h2>{{ country.name }}</h2>
    </div>
  </main>
</template>
