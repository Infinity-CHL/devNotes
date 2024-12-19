<script setup>
const props = defineProps({
  views: Number
});
</script>
<template>
  <span>
      <font-awesome-icon :icon="['far', 'eye']" class="text-slate-400 mr-1"/>
      <span class="text-slate-400 ">
        {{ props.views }}
      </span>
    </span>
</template>
