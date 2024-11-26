<script setup>
    import { useRoute } from 'vue-router';
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
        <!-- <h1>{{ $route.params.id }}</h1> -->
        <h1>{{ countryData.destinations[id].name }}</h1>
        <img :src="pathImg + countryData.destinations[id].image" :alt="countryData.destinations[id].name" />
        <p>{{ countryData.destinations[id].description }}</p>
        <hr>
        <h2>What to visit in {{ countryData.destinations[id].name }}</h2>
        <div >
            
        </div>
    </div>
</template>