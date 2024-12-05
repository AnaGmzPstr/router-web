<script setup>
import data from '../assets/data.json'
import { useRoute } from 'vue-router';


const dataVisit = data;
const pathImg = '/images/'

const route = useRoute();
const id = route.params.id - 1;



</script>

<template>
    <!-- <p>Id: {{ $route.params.index }}</p> -->
    <div class="">

        <h3>{{ dataVisit.destinations[id].experiences[$route.params.index].name }}</h3>
        <img :src="pathImg + dataVisit.destinations[id].experiences[$route.params.index].image"
        :alt="dataVisit.destinations[id].experiences[$route.params.index].image" />
        <p>Descripción: {{ dataVisit.destinations[id].experiences[$route.params.index].description }}</p>
    </div>
</template>