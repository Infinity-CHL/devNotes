<script setup>
import { useStore } from '@/store/store';

const store = useStore();

const props = defineProps({
  prev_id: Number | null,
  next_id: Number | null,
});

</script>
<template>
  <div class="container mb-8">
    <div class="btn-wrapper flex">
      <router-link to="/" class="bg-purple text-white rounded-lg py-2 px-4 mr-2 flex justify-center items-center">
        <font-awesome-icon :icon="['fas', 'house']" />
      </router-link>
      <router-link to="/blog" class="bg-purple text-white rounded-lg py-2 px-4 mr-2 flex justify-center items-center">
        <font-awesome-icon :icon="['fas', 'blog']" />
      </router-link>
      <button
          @click="() => $router.push(`/blog/post/${props.prev_id}`)"
          class="bg-purple text-white rounded-lg py-2 px-4 mr-2 flex justify-center items-center">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </button>
      <button
          @click="() => $router.push(`/blog/post/${props.next_id}`)"
          class="bg-purple text-white rounded-lg py-2 px-4 mr-auto flex justify-center items-center">
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </button>
    </div>
  </div>
</template>
