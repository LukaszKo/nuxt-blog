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
      <v-row>
        <v-col>
          <h1>Existing posts</h1>
          <PostList :list="posts" md="3" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import PostList from '~/components/PostList'
export default {
  components: { PostList },
  layout: 'admin',
  data: () => ({

  }),
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
}
</script>
