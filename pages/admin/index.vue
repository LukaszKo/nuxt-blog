<template>
  <v-row align="center" justify="center">
    <v-col md="10">
      <v-row class="mb-4">
        <v-col>
          <v-btn to="/admin/new-post">
            Create Post
          </v-btn>
        </v-col>
      </v-row>
      <hr>
      <h1>Existing posts</h1>
      <PostList :list="posts" @onRemove="onRemove" />
    </v-col>
  </v-row>
</template>
<script>
import PostList from '~/components/PostList'
export default {
  components: { PostList },
  middleware: ['check-auth', 'auth'],
  layout: 'admin',
  data: () => ({

  }),
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  created () {
    this.$store.dispatch('fetchPosts')
  },
  methods: {
    onRemove (postId) {
      this.$store.dispatch('removePost', postId)
    }
  }
}
</script>
