<template>
  <div>
    <PostPreview v-if="post" :post="post" />
  </div>
</template>
<script>
import PostPreview from '~/components/PostPreview'
export default {
  components: { PostPreview },
  middleware: 'post',
  computed: {
    post () {
      return this.$store.state.post
    }
  }
}
</script>
