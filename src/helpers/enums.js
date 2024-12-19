export const LoadState = Object.freeze({
  INIT: 'init',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
  NOT_FOUND: "not_found"
})

export const AuthState = Object.freeze({
  OK: "ok",
  USER_NOT_FOUND: "user_not_found",
  WRONG_PASSWORD: "wrong_password",
  USER_EXISTS: "user_exists",
})
