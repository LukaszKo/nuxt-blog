<template>
  <v-row align="center" justify="center">
    <v-col md="6">
      <p v-if="$fetchState.pending">
        Fetching post...
      </p>
      <PostForm v-else :is-edit="true" @onSubmit="onEdit" />
    </v-col>
  </v-row>
</template>
<script>
import PostForm from '~/components/PostForm'
export default {
  components: { PostForm },
  layout: 'admin',
  async fetch () {
    await this.$store.dispatch('fetchPost', this.$route.params.postId)
  },
  methods: {
    onEdit (post) {
      this.$store.dispatch('updatePost', post)
      this.$router.push('/admin')
    }
  }
}
</script>
