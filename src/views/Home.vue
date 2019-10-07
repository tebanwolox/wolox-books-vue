<template lang="pug">
  div.auth-container
    img.logo(src="../assets/wolox_logo.svg" alt="Wolox logo")
    h2.subtitle
      | BOOKS
    form.container-form(@submit.prevent="onSubmit")
      label.label-input(for="first_name_register")
        | First name
      input.input-primary(id="first_name_register" type="text" v-model="$v.form.first_name.$model")
      span.alert(v-if="$v.form.first_name.$error")
        | {{ errorField }}

      label.label-input(for="last_name_register")
        | Last name
      input.input-primary(id="last_name_register" type="text" v-model="$v.form.last_name.$model")
      span.alert(v-if="$v.form.last_name.$error")
        | {{ errorField }}

      label.label-input(for="email_register")
        | Email
      input.input-primary(id="email_register" type="text" v-model="$v.form.email.$model")
      span.alert(v-if="$v.form.email.$error")
        | {{ errorEmail }}

      label.label-input(for="pass_register")
        | Password
      input.input-primary(id="pass_register" type="password" v-model="$v.form.password.$model")
      span.alert(v-if="$v.form.password.$error")
        | {{ errorPassword }}

      button.button-primary(type="submit" :disabled="$v.form.$invalid")
        | Sign up
    button.button-secondary(type="button")
      | Login

</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { validatePassword } from '../utils/regEx'
import { formErrors } from '../utils/errors'

export default {
  name: 'home',
  data: function () {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {
    errorField () {
      return formErrors.required
    },
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
        password_confirmation: this.password,
        locale: 'en'
      }
      console.log({ user })
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
