<template>
  <div class="relative border rounded-lg border-slate-200 mb-4 w-full h-60 flex">
    <div class="image max-w-xs h-full w-full">
      <AnimatedPlaceholder
        height="100%"
        width="320px"
        borderBLRadius="8px"
        borderTLRadius="8px"
      />
    </div>
    <div class="p-4 h-full flex flex-col w-full">
      <AnimatedPlaceholder class="mb-4" height="24px" width="200px" />
      <AnimatedPlaceholder class="mb-2" height="36px" width="330px" />
      <div class="summary-placeholder mb-3">
        <AnimatedPlaceholder height="16px" width="330px"/>
        <AnimatedPlaceholder height="16px" width="330px"/>
        <AnimatedPlaceholder height="16px" width="330px"/>
      </div>
      <AnimatedPlaceholder height="24px" width="160px"/>
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>

<style scoped>
.summary-placeholder {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
</style>
