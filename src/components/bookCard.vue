<template lang="pug">
  .class
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object
    }
  },
  mounted () {
    console.log(this.book)
  }
}
</script>

<style lang="scss" scoped>

</style>
