<template lang="pug">
  div.auth-container
    img.logo(src="../assets/wolox_logo.svg" alt="Wolox logo")
    h2.subtitle
      | BOOKS
    form.container-form(@submit.prevent="onSubmit")
      template(v-for="field in registerFields")
        label.label-input(:for="field.id" class="label-input")
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
          this.$router.push('login')
        )
        .catch(err => console.log(err))
    },
    getError (field) {
      if (field === 'password') return this.errorPassword
      if (field === 'email') return this.errorEmail
      return formErrors.required
    },
    goLogin () {
      this.$router.push('login')
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
    justify-content: flex-start;
    font-size: 15px;
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
