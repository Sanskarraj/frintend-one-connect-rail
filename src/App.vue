<script setup>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import { ref, onMounted } from 'vue';
// Assuming jokes is an array of jokes
const jokes = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get('/api/jokes');
    jokes.value = response.data;
  } catch (error) {
    console.error('Error fetching jokes:', error);
  }
});
</script>

<template>
  <div>
    <h1>Hii</h1>
    <p>JOKES : {{ jokes.length }}</p>
    <div v-for="joke in jokes" :key="joke.id">
      <h3>{{ joke.title }}</h3>
      <p>{{ joke.content }}</p>
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
