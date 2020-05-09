<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="post.thumbnail"
    >
      <v-card-title>{{ post.title }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div>{{ post.content }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        <nuxt-link :to="`/posts/${post.id}`">
          Preview
        </nuxt-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
