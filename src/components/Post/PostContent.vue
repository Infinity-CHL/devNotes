<script setup>
import { useStore } from '@/store/store'
import VLazyImage from 'v-lazy-image';
import formatDate from '@/helpers/formateDate';

const store = useStore();

</script>
<template>
  <div class="text-left">
    <h1 class="text-slate-900 text-3xl font-bold mb-4">{{ store.currentPost.title }}</h1>
    <div class="flex items-center mb-4 border-b border-slate-200 py-4">
      <div class="flex items-center mr-auto text-slate-800">
        <span class="mr-1">{{ store.currentPost.read_time }} min read</span>
        <span class="mr-1">·</span>
        <p class="text-md mr-4">{{ formatDate(new Date(store.currentPost.created_at)) }}</p>
      </div>
      <span class="text-slate-400 mr-2">#{{ store.currentPost.category.title }}</span>
    </div>
    <div class="content">
      <VLazyImage class="object-cover h-80 w-full rounded-lg mb-4" :src="store.currentPost.image" />
      <p class="text-xl text-slate-500 mb-8">{{ store.currentPost.content}}</p>
    </div>
  </div>
</template>
