<template>
  <div>
    <section>Post list</section>
    <PostList :list="loadedPosts" />
  </div>
</template>
<script>
import PostList from '~/components/PostList'
export default {
  components: { PostList },
  data () {
    return {

    }
  },
  computed: {
    loadedPosts () {
      return this.$store.state.posts
    }
  },
  created () {
    this.$store.dispatch('fetchPosts')
  }
}
</script>
<style lang="scss" scoped>

</style>
