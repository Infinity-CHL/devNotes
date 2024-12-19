import { ref, watch } from "vue";

export class InputController {
  _value = ref('');
  _input = ref(null);
  _active = ref(false);
  get text() {
    return this._value.value
  }
  set text(text) {
    this._value.value = text
  }
  get active() {
    return this._active.value
  }
  set active(active) {
    this._active.value = active
  }
  get input() {
    return this._input.value
  }
  set input(inp) {
    this._input.value = inp
  }

  listen(collback) {
    watch(this._value, (newVal) => {
      collback(newVal)
    })
  }
  clear() {
    this._value.value = ''
    if(this._input.value) {
      this._input.value.focus()
    }
  }
  reset() {
    this._value.value = ''
    this.active = false
  }
}
