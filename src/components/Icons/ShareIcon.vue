<script setup>
import { ref } from 'vue';
import { createShareLink } from '@/helpers/createShareLink.js';


const props = defineProps({
  itemID: Number | String
})
const coppied = ref(false);

async function copyToClipboard() {
  const shareLink = createShareLink(props.itemID);

  try {
    await navigator.clipboard.writeText(shareLink);
  } catch (err) {
    console.error('Не удалось скопировать текст в буфер обмена', err);
  }
  coppied.value = true
  setTimeout(() => {
    coppied.value = false

  }, 1000)
}
</script>
<template>
  <div class="mr-auto relative">
    <button @click.stop="copyToClipboard()" class="icon-wrapper">
      <font-awesome-icon :icon="['far', 'share-from-square']" class="text-slate-400" />
    </button>
    <Transition>
      <span v-if="coppied" class="text-slate-100 bg-slate-700 px-2 py-1 rounded-lg text-xs absolute left-6">
        Coppied
      </span>
    </Transition>
  </div>
</template>
