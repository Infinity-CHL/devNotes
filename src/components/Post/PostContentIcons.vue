<script setup>
import { useStore } from '@/store/store';

import LikeIcon from '@/components/Icons/LikeIcon.vue';
import CommentIcon from '@/components/Icons/CommentIcon.vue';
import ShareIcon from '@/components/Icons/ShareIcon.vue';
import ViewIcon from '@/components/Icons/ViewIcon.vue';


const store = useStore();
const { likes, comments_count, view_count, id } = store.currentPost;

</script>
<template>
  <div class="flex items-center mb-4">
    <ShareIcon :itemID="id" />
    <ViewIcon :views="view_count" />
  </div>
</template>
