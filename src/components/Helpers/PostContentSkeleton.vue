<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>

<template>
 <div>
    <AnimatedPlaceholder
        class="mb-4"
        height="36px"
        width="100%"
        borderRadius="8px"
        borderTLRadius="8px"
        borderBLRadius="8px"
      />
    <div class="flex items-center justify-between mb-4 py-4">
      <AnimatedPlaceholder
        height="24px"
        width="170px"
        borderRadius="8px"
        borderTLRadius="8px"
        borderBLRadius="8px"
      />
      <AnimatedPlaceholder
        height="24px"
        width="50px"
        borderRadius="8px"
        borderTLRadius="8px"
        borderBLRadius="8px"
      />
    </div>
    <div>
      <AnimatedPlaceholder
        class="mb-4"
        height="320px"
        width="100%"
        borderRadius="8px"
        borderTLRadius="8px"
        borderBLRadius="8px"
      />
      <AnimatedPlaceholder
        height="480px"
        width="100%"
        borderRadius="8px"
        borderTLRadius="8px"
        borderBLRadius="8px"
      />
    </div>
  </div>
</template>
