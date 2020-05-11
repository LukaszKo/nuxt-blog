<template>
  <v-row>
    <v-col v-for="item in list" :key="item.id" md="4">
      <post :post="item" @onRemove="postId => $emit('onRemove', postId)" />
    </v-col>
  </v-row>
</template>
<script>
import Post from '~/components/Post'
export default {
  components: { Post },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }

}
</script>
