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

    <v-card-subtitle class="pb-0">
      Updated: {{ post.updatedDate | toLocalDate }} by {{ post.author }}
    </v-card-subtitle>

    <v-card-text class="text--primary mt-2">
      <div>{{ post.content }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        v-if="!isAuthenticated"
        color="orange"
        :to="`/posts/${post.id}`"
      >
        Preview
      </v-btn>
      <v-btn
        v-if="isAuthenticated"
        color="success"
        :to="`/admin/${post.id}`"
      >
        Edit
      </v-btn>
      <v-btn
        v-if="isAuthenticated"
        color="error"
        @click="$emit('onRemove', post.id)"
      >
        Remove
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
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters['core/isAuthenticated']
    }
  }
}
</script>
