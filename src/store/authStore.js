import { defineStore } from 'pinia';
import { ref } from 'vue';
import { AuthState, LoadState } from '../helpers/enums';
import TokenService from "@/services/auth/TokenService";

export const useAuthStore = defineStore('authStore', () => {
  const isAuth = ref(TokenService.isAuthenticated());
  const loginState = ref(LoadState.INIT)
  const authState = ref(AuthState.INIT)

  async function login(form) {
    loginState.value = LoadState.LOADING
    // const api = new Api()
    try {

      // const response = await api.request().get('/api/auth/log-in/')
      // const saveTokens = await TokenService.setTokens(response.data)
      if (saveTokens) {
        isAuth.value = true
      } else {
        isAuth.value = false
        TokenService.deleteAuth()
      }
      authState.value = AuthState.OK
      loginState.value = LoadState.LOADED
      console.log(isAuth.value)
    }
    catch (e) {
      alert(e)
      if (e.error_key == "bad_password") {
        authState.value = AuthState.WRONG_PASSWORD
      }


      loginState.value = LoadState.ERROR
    }
  }

  return {
    isAuth,
    loginState,
    authState,
    login

  }
})
