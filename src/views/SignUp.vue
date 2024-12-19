<script setup>
import AuthHeader from '@/components/Auth/AuthHeader.vue';
import AuthLogo from '@/components/Auth/AuthLogo.vue';
import Form from '@/components/Form.vue';

</script>
<template>
  <div class="flex justify-center items-center h-screen bg-white">
    <div class="text-center border rounded-3xl bg-white p-8 max-w-sm w-full shadow-md">
      <AuthLogo />
      <auth-header>
        Sign Up
      </auth-header>
      <Form :buttonText="'Sign Up'" />
      <router-link to="/sign-in" class="w-full text-xs text-slate-400 border-b border-slate-700 max-w-max">
        If you already have an account, you can login here!
      </router-link>
    </div>
  </div>
</template>
