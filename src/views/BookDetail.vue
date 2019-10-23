<template lang="pug">
  .detail-container
    .book-container(v-if="book")
      img.book-logo(:src="book.image_url")
      .book-info
        h1.book-title
          | {{ book.title }}
          span.book-subtitle
            | ({{ book.genre }})
        h3.book-detail
          | Book author:
          span.sub-detail
            | {{ book.author }}
        h3.book-detail
          | Publisher:
          span.sub-detail
            | {{ book.publisher }}
        h3.book-detail
          | Year of publication:
          span.sub-detail
            | {{book.year}}
</template>

<script>
import { getBookDetail } from '../services/books'

export default {
  name: 'bookDetail',
  data: function () {
    return {
      book: null
    }
  },
  mounted () {
    getBookDetail(this.$route.params.id).then(res => {
      this.book = res.data
    })
  }
}

</script>

<style lang="scss" scoped>
@import "../scss/colors.scss";

.detail-container {
  background-color: $grey-soft-secundary;
  padding: 60px 120px;
  margin: 0;
}

.book-container {
  background-color: $white;
  box-shadow: 5px 7px 5px 0px $grey-secundary;
  display: flex;
  justify-content: center;
  margin: 200px auto;
  max-width: 900px;
  width: 100%;

  .book-logo {
    height: 300px;
    margin: 20px;
    object-fit: contain;
    width: 200px;
  }
}

.book-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
}

.book-title {
  border-bottom: 3px solid $green;
  font-size: 30px;
  margin-bottom: 30px;
  padding: 5px 5px;
  width: 600px;

  .book-subtitle{
    color: $grey-dark;
    font-size: 16px;
  }
}

.book-detail {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;

  .sub-detail {
    color: $grey-dark;
    font-size: 16px;
  }
}

</style>
