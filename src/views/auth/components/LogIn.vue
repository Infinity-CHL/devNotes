<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

import { useAuthStore } from "@/store/authStore";
import { InputController } from "@/components/common/Input/controller";
import  { LoadState, AuthState }  from "@/helpers/enums";

import Input from "@/components/common/Input/Input.vue";
import AuthLogo from "@/components/Auth/AuthLogo.vue";
import AuthHeader from "@/components/Auth/AuthHeader.vue";
import InputBox from "@/views/auth/components/InputBox.vue";
import InputLabel from "@/views/auth/components/InputLabel.vue";


const usernameInputController = new InputController()
const passwordInputController = new InputController()
const router = useRouter()
const authStore = useAuthStore()

usernameInputController.listen(e => {
  console.log(e.length, 'username');
})

passwordInputController.listen(e => {
  console.log(e, 'password');
})

const checkValid = computed(() => {
  let invalid = true
  if (usernameInputController.text.length > 0  && passwordInputController.text.length > 0) {
    invalid = false
  }
  return invalid
})



async function submitForm() {
  if (!checkValid.value) {
    const form = new FormData()
    form.append("username", usernameInputController.text)
    form.append("password", passwordInputController.text)
    await authStore.login(form)
    if (authStore.loginState == LoadState.LOADED) {
      usernameInputController.reset()
      passwordInputController.reset()
      router.push('/')
    }
  }
}

</script>
<template>
  <div class="flex justify-center items-center h-screen bg-white">
    <div class="text-center border rounded-3xl bg-white p-8 max-w-sm w-full shadow-md">
      <AuthLogo />
      <auth-header>
        Login
      </auth-header>
      <input-box>
        <input-label>
          <font-awesome-icon :icon="['fas', 'user']" class="mr-1" />
          <p>User name</p>
        </input-label>
        <Input
          :controller = usernameInputController
          name="username"
          type="text"
          placeholder="Enter your user name"
        />
      </input-box>
      <input-box>
      <input-label>
      <font-awesome-icon :icon="['fas', 'lock']" class="mr-1" />
          <p>Password</p>
        </input-label>
        <Input
          :controller = passwordInputController
          name="password"
          type="password"
          placeholder="Enter your password"
        />
      </input-box>
      <button @click="() => submitForm()" :disabled="checkValid">Submit</button>
      <div v-if="authStore.authState == AuthState.WRONG_PASSWORD">Bad Password</div>
    </div>
  </div>
</template>

