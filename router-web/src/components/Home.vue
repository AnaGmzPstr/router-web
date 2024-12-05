<script setup>
import data from '../assets/data.json'
const countryData = data
const pathImg = '../images/'
</script>

<template>
    <div class="home">
        <h1>All destinations</h1>
        <div class="destinations">
            <div v-for="(country, index) in countryData.destinations" :key="index">
                <img :src="pathImg + country.image" :alt="country.name" />
                <h2> <RouterLink :to="'/countryDetails/'+country.id">
                        {{ country.name }}
                    </RouterLink>
                </h2>
            </div>
        </div>
    </div>
</template>
