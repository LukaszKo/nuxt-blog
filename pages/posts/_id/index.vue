<template>
  <div>
    <p v-if="$fetchState.pending">
      Fetching post...
    </p>
    <PostPreview v-else :post="post" />
  </div>
</template>
<script>
import PostPreview from '~/components/PostPreview'
export default {
  components: { PostPreview },
  async fetch () {
    await this.$store.dispatch('fetchPost', this.$route.params.id)
  },
  computed: {
    post () {
      return this.$store.state.post
    }
  }
}
</script>
