<template>
  <header class="bg-purple">
    <div class="header-container container max-w-3xl mx-auto text-center py-8 flex justify-between items-center">
      <h1
        class="cursor-pointer text-white text-3xl mb-4"
        @click="$router.push('/')"
      >
        Developer <br>
        <span class="text-">Notes</span>
      </h1>
      <nav>
        <ul class="flex justify-center">
          <li class="mx-3">
            <!-- <router-link to="/blog/create" class="text-white hover:text-silver transition-colors duration-100 ease-linear">Создать пост</router-link> -->
          </li>
          <li class="mx-3">
            <a href="https://t.me/js_days" class="text-white hover:text-silver transition-colors duration-100 ease-linear">О нас</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
.header-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: -1;
  opacity: 0;
}
</style>




