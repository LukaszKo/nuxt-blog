<template>
  <v-row align="center" justify="center">
    <v-col md="6">
      <PostForm @onSubmit="onSubmit" />
    </v-col>
  </v-row>
</template>
<script>
import PostForm from '~/components/PostForm'
export default {
  components: { PostForm },
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
