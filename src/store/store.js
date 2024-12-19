import { ref } from 'vue'
import { defineStore } from 'pinia';


export const useStore = defineStore('store', () => {

  const posts = ref([]);
  const currentPost = ref(null);

  async function fetchPosts()  {
    const data = await fetch('http://localhost:8000/api/v1/posts/');
    const result = await data.json();
    const postsList = result.results;
    posts.value = postsList;
    posts.value.forEach(post => {
      post.created_at = new Date(post.created_at);
      post.image = `${import.meta.env.VITE_IMG_PATH}${post.image}`
    });
  }


  async function fetchCurrentPost(id) {
    const data = await fetch(`http://localhost:8000/api/v1/posts/${id}`);
    const response = await data.json();
    const post = response.results;
    post.created_at = new Date(post.created_at);
    post.image = `${import.meta.env.VITE_IMG_PATH}${post.image}`
    currentPost.value = post;
  }

  function clearPosts() {
    posts.value = [];
  }

  function clearPost() {
    currentPost.value = null;
  }

  const dropdownList = [
    {
      text: "theme",
      icon: ['far', 'eye'],
      options: [
        {
          text: "dark",
          icon: ['far', 'eye'],
        },
        {
          text: "light",
          icon: ['far', 'eye'],
        },
        {
          text: "system",
          icon: ['far', 'eye'],
        },
      ],
    },
    {
      text: "Sozlamalar",
      icon: ['far', 'eye'],
    },
    {
      text: "Home",
      icon: ['far', 'eye'],
    },
  ];

  return {
    posts,
    currentPost,
    fetchPosts,
    fetchCurrentPost,
    clearPost,
    clearPosts,
    dropdownList
  }
})

