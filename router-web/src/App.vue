<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav id="nav">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <RouterView />
  </div>

  <RouterView />
</template>

<style scoped></style>
