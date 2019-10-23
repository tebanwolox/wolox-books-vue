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
import { mapActions, mapGetters } from 'vuex'

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
    ...mapGetters(['loggingStatus']),
    getError () {
      return formErrors.required
    }
  },
  methods: {
    ...mapActions(['logging']),
    onSubmit () {
      getSession(this.form)
        .then(res => {
          this.logging(res.data)
          if (this.loggingStatus) this.$router.push(routes.BOOKS)
        })
        .catch(err => console.log(err))
    },
    goSignUp () {
      this.$router.push(routes.SIGN_UP)
    }
  }
}
</script>
