import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },{
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/Blog.vue')
    },{
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    }, {
      path: '/blog/post/:id',
      name: 'Post',
      component: () => import('../views/Post.vue')
    }
  ]
})

export default router
