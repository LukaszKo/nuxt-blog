<template>
  <v-row align="center" justify="center">
    <v-col md="6">
      <v-card>
        <v-card-title>Create new post form</v-card-title>
        <v-card-text>
          <PostForm @onSubmit="onSubmit" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import PostForm from '~/components/PostForm'
export default {
  components: { PostForm },
  middleware: ['check-auth', 'auth'],
  layout: 'admin',
  data: () => ({

  }),
  methods: {
    async onSubmit (data) {
      await this.$store.dispatch('createPost', data)
      this.$router.push('/admin')
    }
  }
}
</script>
