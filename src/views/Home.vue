<template lang="pug">
  div.auth-container
    img.logo(src="../assets/wolox_logo.svg" alt="Wolox logo")
    h2.subtitle
      | BOOKS
    form.container-form(@submit.prevent="onSubmit")
      label.label-input(for="firstNameRegister")
        | First name
      input.input-primary(id="firstNameRegister" type="text" v-model="$v.form.firstName.$model")
      span.alert(v-if="$v.form.firstName.$error")
        | This field is required

      label.label-input(for="lastNameRegister")
        | Last name
      input.input-primary(id="lastNameRegister" type="text" v-model="$v.form.lastName.$model")
      span.alert(v-if="$v.form.lastName.$error")
        | This field is required

      label.label-input(for="emailRegister")
        | Email
      input.input-primary(id="emailRegister" type="text" v-model="$v.form.email.$model")
      span.alert(v-if="$v.form.email.$error")
        | {{ errorEmail }}

      label.label-input(for="passRegister")
        | Password
      input.input-primary(id="passRegister" type="password" v-model="$v.form.password.$model")
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
import { registerUser } from '../services/users'

export default {
  name: 'home',
  data: function () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {
    errorEmail () {
      return !this.$v.form.email.required ? 'This field is required' : 'This is an email'
    },
    errorPassword () {
      return !this.$v.form.password.required ? 'This field is required' : 'The password must have uppercase letters and numbers'
    }
  },
  validations: {
    form: {
      firstName: {
        required
      },
      lastName: {
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
        first_name: this.form.firstName,
        last_name: this.form.lastName,
        email: this.form.email,
        password: this.form.password,
        password_confirmation: this.form.password,
        locale: 'en'
      }
      registerUser(user)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
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
  max-width: 100%;
}

</style>
