<template lang="pug">
  .auth-container
    img.logo(src="../assets/wolox_logo.svg" alt="Wolox logo")
    h2.subtitle
      | BOOKS
    form.container-form(@submit.prevent="onSubmit")
      label.label-input(v-for="field in loginFields" :key="field.id" :for="field.id")
        | {{ field.label }}
        input.input-primary(:id="field.id" :type="field.type" v-model="$v.form[field.model].$model")
        span.alert(v-if="$v.form[field.model].$error")
          | {{ getError }}
      button.button-primary(type="submit" :disabled="$v.form.$invalid")
        | Login
    button.button-secondary(type="button" @click="goSignUp()")
      | Sign Up

</template>

<script>
import { loginFields } from './constants'
import { formErrors } from './../utils/errors'
import { required } from 'vuelidate/lib/validators'
import { routes } from '../routes'
import { getSession } from '../services/users'

export default {
  name: 'login',
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      },
      loginFields
    }
  },
  validations: {
    form: {
      email: {
        required
      },
      password: {
        required
      }
    }
  },
  computed: {
    getError () {
      return formErrors.required
    }
  },
  methods: {
    onSubmit () {
      getSession(this.form)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    },
    goSignUp () {
      this.$router.push(routes.SIGN_UP)
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../scss/colors.scss";
@import "../scss/buttons.scss";
@import "../scss/inputs.scss";

.container-form {
  border-bottom: 3px solid $grey-soft;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;

  .label-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    justify-content: flex-start;
    margin: 10px;
  }
}

.auth-container {
  align-items: center;
  background-color: $grey;
  border-top: 3px solid $blue;
  display: flex;
  flex-direction: column;
  margin: 150px auto;
  max-width: 350px;
  padding: 10px;

  .logo {
    height: 40px;
    margin: 20px 20px 10px;
  }

  .subtitle {
    font-size: 12px;
    letter-spacing: 8px;
  }
}

.alert {
  border-radius: 10px;
  color: $red;
  padding: 5px;
  width: 100%;
}

</style>
