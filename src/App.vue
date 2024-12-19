<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView class="font-primary" />
</template>

<style>

.section-header::before {
  content: '';
  width: 100%;
  height: 1px;
  display: block;
  background-color: #c6c5c5;
  position: absolute;
  top: 0;
}
</style>
