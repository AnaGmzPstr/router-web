<script setup>
    import { useRoute } from 'vue-router';
    import { RouterLink } from 'vue-router'

    import data from '../assets/data.json'
    import { ref } from 'vue';
    import { watch } from 'vue';

    const countryData = data;
    const pathImg = '../src/assets/images/'
    const route = useRoute();
    const id = ref(route.params.id-1) ;
    
    watch(
        () => route.params.id,
        (newId) => {
            id.value = newId - 1
        }
    );
</script>

<template>
    <div>
        <button><RouterLink to="/">Return</RouterLink></button>
        <!-- <h1>{{ $route.params.id }}</h1> -->
        <h1>{{ countryData.destinations[id].name }}</h1>
        <div class="destination-details">
            <img :src="pathImg + countryData.destinations[id].image" :alt="countryData.destinations[id].name" />
            <p>{{ countryData.destinations[id].description }}</p>
        </div>

        <div class="experiences">
        <h2>Top experiences in {{ countryData.destinations[id].name }}</h2>
        <div class="cards">

            <div v-for="visit in countryData.destinations[id].experiences" :key="index" class="card">
                <img :src="pathImg + visit.image" :alt="visit.name" />
                <p class="card__text"> 
                    {{ visit.name }}
                    
                </p>
            </div>
        </div>
        </div>
    </div>
</template>