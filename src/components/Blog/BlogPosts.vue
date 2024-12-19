<script setup>
import { useStore } from '@/store/store';
import PostItem from '@/components/Post/PostItem.vue';
import PostItemSkeletonVue from '../Helpers/PostItemSkeleton.vue';

const store = useStore();

</script>
<template>
  <div class="hero pt-10">
      <div v-if="store.posts.length < 1">
        <PostItemSkeletonVue class="mb-4"/>
        <PostItemSkeletonVue class="mb-4"/>
        <PostItemSkeletonVue class="mb-4"/>
      </div>
      <div v-else class="flex flex-wrap mx-auto justify-center">
        <PostItem />
      </div>
    </div>
</template>
