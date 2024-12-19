<script setup>
import { ref, computed, onMounted} from 'vue';
import gsap from 'gsap';

const tl = gsap.timeline({
  paused: true,
  onCompleteScope: this
})

onMounted(() => {
  tl.play();
  tl.fromTo('.image', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  tl.fromTo('.info', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .5 });
  tl.fromTo('.text', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .5 });
  tl.fromTo('.btns', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .5 });
});

const words = ['Web', 'Frontend', 'Backend', 'Mobile dev', 'Game dev'];

const currentWord = ref('');

const word = computed(() => {
  return currentWord.value;
})

const changeWord = () => {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  currentWord.value = randomWord;
};

onMounted(changeWord);
setInterval(changeWord, 2000);

</script>
<template>
  <div class="container mx-auto pt-36">
    <div class="container px-3 flex mb-8">
      <img class="image rounded-full w-1/2 mr-10" src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/IT_Developers_Logo_Designs_30_1024x1024.png?v=1657175006" alt="Javohir">
      <div class="info flex flex-col">
        <h1 class="text-5xl font-semibold text-slate-800 mb-2">Читай, учись, создавай: <span class="text-purple">Блог для разработчиков</span></h1>
        <h2 class="words text-3xl text-metal mb-auto" >{{ word }}</h2>
        <ul class="flex items-center">
          <li class="mr-3">
            <a href="#">
              <img class="w-8" src="../assets/img/youtube.svg" alt="">
            </a>
          </li>
          <li class="mx-3">
            <a href="#">
              <img class="w-6" src="../assets/img/linkedin.svg" alt="">
            </a>
          </li>
          <li class="mx-3">
            <a href="https://t.me/js_days">
              <img class="w-7" src="../assets/img/telegram.svg" alt="telegram">
            </a>
          </li>
          <li class="mx-3">
            <a href="#">
              <img class="w-7" src="../assets/img/github-mark.svg" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="">
      <p class="text text-slate-600 text-xl mb-8">Читайте статьи, делитесь опытом и улучшайте свои навыки в мире разработки. Погрузитесь в увлекательный процесс обучения и роста с Developer Notes.</p>
      <div class="btns flex items-center">
        <router-link to="/blog" class="mr-5 text-purple bg-inherit border border-purple rounded-lg px-3 py-2">Читать блог</router-link>
        <a href="http://127.0.0.1:8000/admin/" class="text-white bg-purple border border-purple rounded-lg px-3 py-2 transition-colors hover:bg-purple">Создать пост</a>
      </div>
    </div>
  </div>
</template>
