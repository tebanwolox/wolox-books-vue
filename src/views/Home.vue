<template lang="pug">
  div(class="auth-container")
    img(class="logo", src="../assets/wolox_logo.svg", alt="Wolox logo")
    p(class="subtitle") BOOKS
    form(class="container-form" @submit.prevent="onSubmit")
      label(class="label-input") First name
      input(type="text", class="input-primary" v-model="firstName")

      label(class="label-input") Last name
      input(type="text", class="input-primary" v-model="lastName")

      label(class="label-input") Email
      input(type="email", class="input-primary" v-model="email")

      label(class="label-input") Password
      input(type="password", class="input-primary" v-model="password")

      button(type="submit", class="button-primary") Sign up
    button(type="button" class="button-secondary") Login
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    };
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
};
</script>

<style lang="scss">
@import '../scss/colors.scss';
@import '../scss/buttons.scss';
@import '../scss/inputs.scss';

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
  background-color: $red;
  border-radius: 10px;
  color: $white;
  padding: 10px;
  width: 100%;
}
</style>
