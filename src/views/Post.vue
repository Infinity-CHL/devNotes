<script setup>
import { useStore } from '@/store/store'
import { onMounted, onUnmounted, watch } from "vue"
import { useRoute } from 'vue-router'

import Search from '@/components/Search.vue'
import PostNavigation from '@/components/Post/PostNavigation.vue';
import PostComments from '@/components/Post/PostComments.vue';
import PostContent from '@/components/Post/PostContent.vue';
import PostContentIcons from '@/components/Post/PostContentIcons.vue';


import PostNavigationSkeleton from '@/components/Helpers/PostNavigationSkeleton.vue';
import PostContentSkeleton from '@/components/Helpers/PostContentSkeleton.vue';

const store = useStore();
const route = useRoute();


async function loadStore() {
  const postId = route.params.id
  await store.fetchCurrentPost(postId)
}

watch(route, () => {
  if (route.name == 'Post') {
    loadStore()
  }
})

onMounted(() => {
  loadStore()
});

onUnmounted(() => {
  store.clearPost()
});

</script>

<template>
  <div class="text-center container mx-auto max-w-2xl px-4">
    <div v-if="!store.currentPost">
      <PostNavigationSkeleton />
      <PostContentSkeleton />
    </div>
    <div v-else class="my-8">
      <PostNavigation
        :prev_id="store.currentPost.prev_id"
        :next_id="store.currentPost.next_id"
        />
      <PostContent />
      <PostContentIcons />
    </div>
  </div>
</template>

<style>
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}

  .v-lazy-image {
    background-image: linear-gradient(
    to right,
    #d6d7d8 0%,
    #e2e3e4 10%,
    #d6d7d8 20%,
    #d6d7d8 100%
    );
    background-size: 200% 100%;
    animation: bgAnimate 1.2s linear infinite;
    z-index: 99;
  }

  .v-lazy-image-loaded {
    background: none;
    animation: none;
  }

  .icon-wrapper:hover span {
  color: rgb(30 41 59);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: linear;
  transition-duration: 150ms;
}

.icon-wrapper:hover svg {
  color: rgb(30 41 59);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: linear;
  transition-duration: 150ms;
}

.v-enter-active,
.v-leave-active {
  transition: opacity .2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
