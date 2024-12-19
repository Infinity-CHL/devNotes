<script setup>
import { ref } from "vue";
import LogIn from "@/views/auth/components/LogIn.vue";
import SignUp from "@/views/auth/components/SignUp.vue";

const AuthMode = Object.freeze({
  LOGIN: "login",
  SIGNUP: "signup"
})

const authMode = ref(AuthMode.LOGIN)

function changeMode() {
  if (authMode.value == AuthMode.LOGIN) {
    authMode.value = AuthMode.SIGNUP
  }
  else if (authMode.value == AuthMode.SIGNUP) {
    authMode.value = AuthMode.LOGIN
  }
}

</script>

<template>
  <LogIn v-if="authMode === AuthMode.LOGIN" />
  <SignUp v-else-if="authMode === AuthMode.SIGNUP" />
  <div @click="() => changeMode()">
    Change Mode
  </div>
</template>


