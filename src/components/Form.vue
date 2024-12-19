<script setup>
import { useAuthStore } from '@/store/authStore.js';
import { useRouter } from 'vue-router';

import FormNameInput from '@/components/Form/FormNameInput.vue';
import FormPasswordInput from '@/components/Form/FormPasswordInput.vue';
import FormInput from '@/components/Form/FormInput.vue';
import FormButton from '@/components/Form/FormButton.vue';

const userNameLabel = 'User name';
const passwordLabel = 'Password';

const authStore = useAuthStore();
const router = useRouter();

const props = defineProps({
  buttonText: String,
});

if (router.currentRoute.value.path === '/sign-in') authStore.isSignIn = true;

</script>

<template>
  <div>
    <form @submit.prevent="" class="mb-4">
      <form-input :label="userNameLabel">
        <template #customIcon>
          <font-awesome-icon :icon="['fas', 'user']" class="mr-1" />
        </template>
        <template #customInput>
          <FormNameInput />
        </template>
      </form-input>
      <form-input :label="passwordLabel">
        <template #customIcon>
          <font-awesome-icon :icon="['fas', 'lock']" class="mr-1" />
        </template>
        <template #customInput>
          <FormPasswordInput />
        </template>
      </form-input>
      <FormButton :buttonText="props.buttonText"/>
    </form>
  </div>
</template>
