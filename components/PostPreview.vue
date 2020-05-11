<template>
  <v-card class="mx-auto" max-width="800px">
    <v-img class="white--text align-end" height="400px" :src="post.thumbnail">
      <v-card-title>{{ post.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Created: {{ post.updatedDate | toLocalDate }} by {{ post.author }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ post.content }}</div>
    </v-card-text>

    <v-card-actions />
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
