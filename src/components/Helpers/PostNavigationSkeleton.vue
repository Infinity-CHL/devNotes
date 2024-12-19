<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>

<template>
  <div class="container mx-auto max-w-4xls py-8">
    <div>
      <AnimatedPlaceholder
        height="42px"
        width="100%"
        borderRadius="8px"
        borderTLRadius="8px"
        borderBLRadius="8px"
      />
    </div>
  </div>
  <div class="container mb-8">
    <div class="btn-wrapper flex max-w-md">
      <AnimatedPlaceholder
        class="mr-2"
        height="32px"
        width="50px"
        borderRadius="8px"
        borderTLRadius="8px"
        borderBLRadius="8px"
      />
      <AnimatedPlaceholder
        class="mr-2"
        height="32px"
        width="50px"
        borderRadius="8px"
        borderTLRadius="8px"
        borderBLRadius="8px"
      />
      <AnimatedPlaceholder
        class="mr-2"
        height="32px"
        width="50px"
        borderRadius="8px"
        borderTLRadius="8px"
        borderBLRadius="8px"
      />
      <AnimatedPlaceholder
        class="mr-2"
        height="32px"
        width="50px"
        borderRadius="8px"
        borderTLRadius="8px"
        borderBLRadius="8px"
      />
    </div>
  </div>
</template>
