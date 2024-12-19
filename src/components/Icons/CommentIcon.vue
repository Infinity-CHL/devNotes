<script setup>
import { useAuthStore } from '@/store/authStore';

const authStore = useAuthStore();

const props = defineProps({
  comments_count: Number
});

</script>
<template>
  <button
    @click.stop="!authStore.isAuth ? $router.push('/sign-in') : authStore.likePost()"
    class="mr-4 icon-wrapper"
  >
    <font-awesome-icon :icon="['far', 'comment']" class="text-slate-400 mr-1" />
    <span class="text-slate-400 ">
      {{ props.comments_count }}
    </span>
  </button>
</template>
