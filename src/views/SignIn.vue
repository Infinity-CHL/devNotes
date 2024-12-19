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
        Sign In
      </auth-header>
      <Form :buttonText="'Sign In'"/>
      <router-link to="/sign-up" class="w-full text-xs text-slate-400 border-b border-slate-700 max-w-max">
        If you don't have an account, you can create it here!
      </router-link>
    </div>
  </div>
</template>
