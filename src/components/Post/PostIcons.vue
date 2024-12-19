<script setup>
// import LikeIcon from '@/components/Icons/LikeIcon.vue';
// import CommentIcon from '@/components/Icons/CommentIcon.vue';
import ShareIcon from '@/components/Icons/ShareIcon.vue';
import ViewIcon from '@/components/Icons/ViewIcon.vue';

const props = defineProps({
    iconData: Object
  });

const { likes, comments_count, views, itemID } = props.iconData;

</script>
<template>
  <div class="flex items-center mt-auto z-10">
    <!-- <LikeIcon :likes="likes"/>
    <CommentIcon :comments_count="comments_count" /> -->
    <ShareIcon :itemID="itemID" />
    <ViewIcon :views="views" />
  </div>
</template>

<style>

</style>
