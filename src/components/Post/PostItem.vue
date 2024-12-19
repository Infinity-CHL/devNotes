<script setup>
  import { useStore } from '@/store/store';
  import formateDate from '@/helpers/formateDate';
  import PostIconsVue from '@/components/Post/PostIcons.vue';
  import VLazyImage from 'v-lazy-image';

  const store = useStore();
  const posts = store.posts;

</script>

<template>
  <article
    class="relative overflow-hidden transition-shadow hover:shadow-xl border rounded-lg border-slate-200 mb-4 cursor-pointer w-full h-60 flex"
    v-for="item, itemIndex in posts"
    :key="itemIndex"
    @click="$router.push(`/blog/post/${item.id}`)"
  >
    <VLazyImage
      class="max-w-xs object-cover h-full w-full"
      :src="item.image"
    />
    <div class="preview p-4 h-full flex flex-col w-full">
      <span class="text-slate-400 rounded-md max-w-max">
        #{{ item.category.title }}
      </span>
      <h1 class="title text-slate-900 text-3xl max-w-xs">
      {{ item.title }}
      </h1>
      <p class="descr text-slate-600">
        {{ item.content }}
      </p>
      <PostIconsVue
        :iconData = "{
          likes: item.likes,
          comments_count: item.comments_count,
          views: item.view_count,
          itemID: item.id
        }"
      />
      <p class="absolute top-4 right-4 text-slate-400" >
        {{ formateDate(item.created_at) }}
      </p>
    </div>
  </article>
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
  }

  .v-lazy-image-loaded {
    background: none;
    animation: none;
  }

  .descr, .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .descr {
    max-width: 330px;
    -webkit-line-clamp: 3;
  }

  .title {
    max-width: 330px;
    -webkit-line-clamp: 2;
  }


</style>
