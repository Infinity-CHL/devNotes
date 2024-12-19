<script setup>
import Header from '../components/Header.vue';
import BlogHeader from '../components/Blog/BlogHeader.vue';
import BlogPosts from '../components/Blog/BlogPosts.vue';
import { onMounted, onUnmounted } from 'vue';
import { useStore } from '../store/store';

const store = useStore();

async function loadStore() {
  await store.fetchPosts();
  console.log(store.posts)
}

onMounted(() => {
  loadStore();
});

onUnmounted(() => {
  store.clearPosts();
});

</script>

<template>
  <div class="hero">
    <Header />
    <BlogHeader />
    <main class="container relative max-w-3xl mx-auto">
      <BlogPosts />
    </main>
  </div>
</template>

<style>

</style>
