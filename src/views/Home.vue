<template lang="pug">
  div(class="auth-container")
    img(class="logo", src="../assets/wolox_logo.svg", alt="Wolox logo")
    p(class="subtitle") BOOKS
    form(class="container-form" @submit.prevent="onSubmit")
      label(class="label-input") First name
      input(type="text", class="input-primary", v-model="$v.form.firstName.$model")
      div(v-if="$v.form.firstName.$error")
        span(class="alert" class="alert" v-if="!$v.form.firstName.required") This field is required

      label(class="label-input") Last name
      input(type="text", class="input-primary" v-model="$v.form.lastName.$model")
      div(v-if="$v.form.lastName.$error")
        span(class="alert" class="alert" v-if="!$v.form.lastName.required") This field is required

      label(class="label-input") Email
      input(type="text", class="input-primary" v-model="$v.form.email.$model")
      div(v-if="$v.form.email.$error")
        span(class="alert" class="alert" v-if="!$v.form.email.required") This field is required
        span(class="alert" class="alert" v-if="!$v.form.email.email") This field is an email

      label(class="label-input") Password
      input(type="password", class="input-primary" v-model="$v.form.password.$model")
      div(v-if="$v.form.password.$error")
        span(class="alert" class="alert" v-if="!$v.form.password.required") This field is required
        span(class="alert" class="alert" v-if="!$v.form.password.strongPassword") The password must have uppercase letters and numbers

      button(type="submit", class="button-primary", :disabled="$v.form.$invalid") Sign up
    button(type="button" class="button-secondary") Login
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: "home",
  data: function() {
    return {
      form:{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    };
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
        strongPassword(password) {
          return (
            /[a-z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[A-Z]/.test(password)
          );
        }
      }
    }
  },
  methods: {
    onSubmit() {
      let user = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.password,
        locale: "en"
      };
      console.log({ user });
    }
  }
}
</script>

<style lang="scss">
@import "../scss/colors.scss";
@import "../scss/buttons.scss";
@import "../scss/inputs.scss";

.container-form {
  border-bottom: 3px solid $grey-soft;
  display: flex;
  flex-direction: column;
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
  width: 100%;

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
