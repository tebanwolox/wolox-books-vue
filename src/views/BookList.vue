<template lang="pug">
  .book-page-container
    navBar
    .books-container
      bookCard(v-for="book in books" :key="book.id" :book="book")

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
@import "../scss/colors.scss";

.book-page-container {
  background-color: $grey-soft-secundary;
}

.books-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 120px;
}

</style>
