export function setRules() {
  const rules = {
    minLength: (value) => value.length < 6 || 'Минимальное колиичество символов 6',
    maxLength: (value) => value > 18 || 'Максимальное колиичество символов 18',
    required: (value) => !!value || 'Это обязательное поле',
    email: (value) => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || 'Неправильный адрес почты'
    }
  }
  return rules;
}
