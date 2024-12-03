<script setup>
    import data from '../assets/data.json'

    const dataVisit = data;
    
</script>

<template>
    <p>Id: {{ $route.params.index }}</p>
    <p>Nombre: {{ dataVisit.destinations[0].experiences[$route.params.index].name }}</p>
</template>