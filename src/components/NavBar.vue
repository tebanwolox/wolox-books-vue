<template lang="pug">
  nav.nav
    .logo-container
      img.navbar-logo(src="../assets/wolox_logo.svg" alt="Wolox logo")
      h2.subtitle
        | BOOKS
    button.navbar-button(@click="closeSession()")
      | Sign Out
</template>

<script>
import { routes } from '../routes'
import { mapActions } from 'vuex'

export default {
  name: 'NavBar',
  methods: {
    ...mapActions(['loggout']),
    closeSession () {
      this.loggout()
      this.$router.push(routes.LOGIN)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/colors.scss";

.nav {
  align-items: center;
  background-color: $white;
  border-top: 5px solid $blue;
  box-shadow: 5px 7px 5px 0px $grey;
  display: flex;
  height: 90px;
  justify-content: space-around;
  padding: 5px 20px;
  position: fixed;
  top: 0;
  width: 100%;
}

.logo-container {
  align-items: center;
  display: flex;
  flex-direction: column;

  .navbar-logo {
    height: 30px;
  }

  .subtitle {
    font-size: 12px;
    letter-spacing: 8px;
  }
}

.navbar-button {
 font-size: 22px;
}

</style>
