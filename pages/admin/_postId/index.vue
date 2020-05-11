<template>
  <v-row align="center" justify="center">
    <v-col md="6">
      <PostForm @onSubmit="onEdit" />
    </v-col>
  </v-row>
</template>
<script>
import PostForm from '~/components/PostForm'
export default {
  components: { PostForm },
  layout: 'admin',
  methods: {
    onEdit (post) {
      this.$store.dispatch('updatePost', post)
      this.$router.push('/admin')
    }
  }
}
</script>
