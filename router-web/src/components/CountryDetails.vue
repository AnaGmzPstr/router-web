<script setup>
import { useRoute } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router'

import data from '../assets/data.json'
import { ref } from 'vue';
import { watch } from 'vue';

const countryData = data;
const pathImg = '/images/'
const route = useRoute();
const id = ref(route.params.id - 1);

watch(
    () => route.params.id,
    (newId) => {
        id.value = newId - 1
    }
);
</script>

<template>
    <div>
        <button>
            <RouterLink to="/">Return home</RouterLink>
        </button>
        <!-- <h1>{{ $route.params.id }}</h1> -->
        <h1>{{ countryData.destinations[id].name }}</h1>
        <div class="destination-details">
            <img :src="pathImg + countryData.destinations[id].image" :alt="countryData.destinations[id].name" />
            <p>{{ countryData.destinations[id].description }}</p>
        </div>

        <div class="experiences">
            <h2>Top experiences in {{ countryData.destinations[id].name }}</h2>
            <div class="cards">
                <div v-for="(visit, i) in countryData.destinations[id].experiences" :key="visit.name" class="card">
                    <img :src="pathImg + visit.image" :alt="visit.name" />
                    <div >
                        <RouterLink :to="`/countryDetails/${route.params.id}/countryVisit/${i}`">
                            {{ visit.name }}
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RouterView/>
</template>