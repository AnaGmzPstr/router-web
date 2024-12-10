<template>
    <span class="go-back">
        <button @click="goBack">Go back</button>
        <!-- <p>Id: {{ id }}</p> -->
    </span>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
    id: Number
});
const router = useRouter();
const route = useRoute();
const goBack = ()=>{
    //router.go(-1);
    console.log(route.fullPath);
    const nextId = props.id + 1;
    if (route.fullPath.includes('countryVisit')){
        router.push({ path: `/countryDetails/${nextId}`});

    } else {
        router.push('/');
    }
    
}
</script>