<template>
  <div class="w-full" @click="() => input?.focus()">
      <div :class="extra_class">
          <input
            class="w-full rounded-md p-2"
            :autofocus="autofocus"
            :readonly="readonly"
            @focus="focused"
            :disabled="disabled"
            :autocomplete="getAuthoComlite()"
            :name="name"
            @blur="focused"
            @keypress="isNumber"
            ref="input"
            :type="type"
            v-model="controller.text"
            :inputmode="inputmode"
            :maxlength="maxlength"
            :placeholder="placeholder"
          >
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { InputController } from "./controller";


  const props = defineProps({
    label: { type: String, default: '' },
    placeholder: { type: String, required: true },
    controller: { type: InputController, required: true },
    name: { type: String, required: true },
    type: { type: String, default: 'text' },
    selected: { type: Boolean, default: false  },
    error: { type: Boolean, default: false  },
    extra_class: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    icon: { type : String, default: '' },
    inputmode: { type  : String, default: 'text' },
    autofocus: { type : Boolean, default: false },
    readonly: { type : Boolean, default: false },
    maxlength: { type : Number, default: 999},
})


const emits = defineEmits(['onFocus', 'onBlur'])

const active = ref(false)
const input = ref(null)

function isNumber(e) {
  if (props.type == 'tel') {
      const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+'];
      const keyPressed = e.key;

      if (!keysAllowed.includes(keyPressed)) {
          e.preventDefault()
      }
  }
}

function focused(e) {
  emits('onFocus')
  if (!active.value && e.type == 'focus') {
      active.value = true
  }
  else if (active.value && e.type == 'blur' && props.controller.text.length === 0) {
      emits('onBlur')
      active.value = false
  }
}

function getAuthoComlite() {
  if (props.type == "password") return "current-password"
  else if (props.type == "tel") return "tel"
  return "off"
}

props.controller.listen(value => {
  if (value.length > 0) {
      active.value = true
  }
  if (typeof props.limit == 'number' && props.limit > 0) {
      props.controller.text = value.substring(0, props.limit)
  }
})


onMounted(() => {

  if (props.controller.text.length > 0) {
      active.value = true
  }
  props.controller.input = input.value

  if (props.selected) {
      input.value.focus()
  }
})

</script>
