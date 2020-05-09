<template>
  <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-img
      class="white--text align-end"
      height="400px"
      :src="post.thumbnail"
    >
      <v-card-title>{{ post.title }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div>{{ post.content }}</div>
    </v-card-text>

    <v-card-actions />
  </v-card>
</template>
<script>
export default {
  asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    return new Promise((resolve, reject) => {
      const id = params.id
      const post = store.getters.getPost(id)
      resolve(post)
    }).then((data) => {
      return { post: data }
    })
  }
}
</script>
