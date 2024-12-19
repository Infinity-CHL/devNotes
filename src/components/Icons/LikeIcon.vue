<script setup>
import { useAuthStore } from '@/store/authStore';

const authStore = useAuthStore();

const props = defineProps({
  likes: Number
});

</script>
<template>
  <button
    @click.stop="!authStore.isAuth ? $router.push('/sign-in') : authStore.likePost()"
    class="mr-4 icon-wrapper"
  >
    <font-awesome-icon :icon="['far', 'heart']" class="text-slate-400 mr-1" />
    <span class="text-slate-400">
      {{ props.likes }}
    </span>
  </button>
</template>
