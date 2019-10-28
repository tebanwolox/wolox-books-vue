<template lang="pug">
  router-link.book(:to='{ path: bookDetailRoute }')
    img.book-logo(:src="book.image_url" :alt="`${book.title} logo`")
    h3.book-title
      | {{ book.title }}
    h4.book-author
      | {{ book.author }}
</template>

<script>
import { routes } from '../routes'

export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object
    }
  },
  computed: {
    bookDetailRoute () {
      return `${routes.BOOKS}/${this.book.id}`
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../scss/colors.scss";

.book {
  align-items: center;
  background-color: $white;
  box-shadow: 5px 7px 5px 0px $grey-secundary;
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: 250px;
  padding: 20px;
  width: 100%;

  .book-logo {
    height: 150px;
    margin-bottom: 5px;
    width: 100px;
  }

  .book-title {
    align-self: flex-start;
    font-size: 16px;
    font-weight: bold;
    margin-top: 15px;
  }

  .book-author {
    align-self: flex-start;
    font-size: 12px;
    margin-top: 5px;
    text-align: center;
  }
}

</style>
