<template lang="pug">
  .books-container
    bookCard(v-for="book in books" :key="book.id" :book="book")
</template>

<script>
import bookCard from '../components/bookCard'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'bookList',
  components: {
    bookCard
  },
  mounted () {
    if (this.books.length === 0) this.findBooks()
  },
  computed: mapGetters(['books']),
  methods: mapActions(['findBooks'])
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
