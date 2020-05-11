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
      Created: {{ post.updatedDate }} by {{ post.author }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ post.content }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        v-if="!isAdmin"
        color="orange"
        @click="goToDetails"
      >
        Preview
      </v-btn>
      <v-btn
        v-if="isAdmin"
        color="success"
        @click="goToEdit"
      >
        Edit
      </v-btn>
      <v-btn
        v-if="isAdmin"
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
    isAdmin () {
      return this.$store.state.admin
    }
  },
  methods: {
    goToDetails () {
      this.$router.push(`/posts/${this.post.id}`)
      this.$store.commit('setPost', this.post)
    },
    goToEdit (post) {
      this.$router.push(`/admin/${this.post.id}`)
      this.$store.commit('setPost', this.post)
    }
  }
}
</script>
