<template>
  <v-row align="center" justify="center">
    <v-col md="6">
      <v-card>
        <v-card-title>Edit post form</v-card-title>
        <v-card-text>
          <PostForm :is-edit="true" @onSubmit="onEdit" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import PostForm from '~/components/PostForm'
export default {
  components: { PostForm },
  middleware: ['check-auth', 'auth', 'post'],
  layout: 'admin',
  methods: {
    onEdit (post) {
      this.$store.dispatch('updatePost', post)
      this.$router.push('/admin')
    }
  }
}
</script>
