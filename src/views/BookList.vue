<template lang="pug">
  .books-container
    bookCard(v-for="book in books" :key="book.id" :book="book")
</template>

<script>
import navBar from '../components/NavBar'
import bookCard from '../components/bookCard'

export default {
  name: 'bookList',
  components: {
    navBar,
    bookCard
  },
  mounted () {
    if (this.$store.state.books.length === 0) this.$store.dispatch('findBooks')
  },
  computed: {
    books () {
      return this.$store.state.books
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../scss/colors.scss";

.books-container {
  background-color: $grey-soft-secundary;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 120px;
}

</style>
