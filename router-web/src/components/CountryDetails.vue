<script setup>
import { useRoute } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router'

import GoBack from "@/components/Return.vue"

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

const scroll=() =>{
    setTimeout(() => {

        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 500)
}
</script>

<template>
    <div>
        <!-- <h1>{{ $route.params.id }}</h1> -->
        <h1>{{ countryData.destinations[id].name }}</h1>
        <GoBack/>
        <div class="destination-details">
            <img :src="pathImg + countryData.destinations[id].image" :alt="countryData.destinations[id].name" />
            <p>{{ countryData.destinations[id].description }}</p>
        </div>

        <div class="experiences">
            <h2>Top experiences in {{ countryData.destinations[id].name }}</h2>
            <div class="cards">
                <div v-for="(visit, i) in countryData.destinations[id].experiences" :key="visit.name" class="card">

                    <RouterLink :to="`/countryDetails/${route.params.id}/countryVisit/${i}`" @click="scroll">
                        <img :src="pathImg + visit.image" :alt="visit.name" />
                        <span class="card__text">{{ visit.name }}</span>
                    </RouterLink>

                </div>
            </div>
        </div>
        <RouterView />
    </div>
</template>

<style></style>