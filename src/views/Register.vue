<template lang="pug">
  .auth-container
    img.logo(src="../assets/wolox_logo.svg" alt="Wolox logo")
    h2.subtitle
      | BOOKS
    form.container-form(@submit.prevent="onSubmit")
      label.label-input(v-for="field in registerFields" :key="field.id" :for="field.id")
        | {{ field.label }}
        input.input-primary(:id="field.id" :type="field.type" v-model="$v.form[field.model].$model")
        span.alert(v-if="$v.form[field.model].$error")
          | {{ getError(field.model) }}
      button.button-primary(type="submit" :disabled="$v.form.$invalid")
        | Sign up
    button.button-secondary(type="button" @click="goLogin()")
      | Login

</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { validatePassword } from '../utils/regEx'
import { registerUser } from '../services/users'
import { formErrors } from '../utils/errors'
import { registerFields } from './constants'
import { routes } from '../routes'

export default {
  name: 'register',
  data: function () {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      },
      registerFields
    }
  },
  computed: {
    errorEmail () {
      return this.$v.form.email.required ? formErrors.email : formErrors.required
    },
    errorPassword () {
      return this.$v.form.password.required ? formErrors.password : formErrors.required
    }
  },
  validations: {
    form: {
      first_name: {
        required
      },
      last_name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        strongPassword (password) {
          return validatePassword(password)
        }
      }
    }
  },
  methods: {
    onSubmit () {
      let user = {
        ...this.form,
        password_confirmation: this.form.password,
        locale: 'en'
      }
      registerUser(user)
        .then(resp =>
          this.$router.push(routes.LOGIN)
        )
        .catch(err => console.log(err))
    },
    getError (field) {
      if (field === 'password') return this.errorPassword
      if (field === 'email') return this.errorEmail
      return formErrors.required
    },
    goLogin () {
      this.$router.push(routes.LOGIN)
    }
  }
}
</script>
