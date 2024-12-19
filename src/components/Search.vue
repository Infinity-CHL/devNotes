<template>
  <div class="container mx-auto max-w-4xl py-8 z-10">
    <div class="input-wrapper py-1 pl-4 pr-1 bg-slate-200 rounded-lg flex items-center transition-all ease-linear border border-transparent">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="mr-4 text-slate-400" />
      <input type="text" placeholder="Найти в Блоге" class="w-full bg-transparent focus:outline-none">
      <button class="ml-auto rounded-lg px-4 py-2 bg-yellow-500 text-xs">Найти</button>
    </div>
  </div>
</template>

<style scoped>
/* .input-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  height: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .1);
  z-index: -1;
  opacity: 0;
} */

.input-wrapper:focus-within {
  background-color: #fff;
  border-color: rgb(226 232 240);
}

input::placeholder {
  color: rgb(148 163 184);
}

button {
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: linear;
  transition-duration: 150ms;
}

input:focus + button {
  opacity: 1;
}
</style>
