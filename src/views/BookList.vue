<template lang="pug">
  .div
    navBar
    .div(v-for="book in books")
      bookCard(:book="book")
</template>

<script>
import navBar from '../components/NavBar'
import bookCard from '../components/bookCard'
import { getBooks } from '../services/books'

export default {
  name: 'bookList',
  components: {
    navBar,
    bookCard
  },
  data: function () {
    return {
      books: []
    }
  },
  mounted () {
    getBooks()
      .then(res => {
        this.books = res.data
      })
      .catch(err => console.log(err))
  }
}
</script>

<style lang="scss" scoped>

</style>
