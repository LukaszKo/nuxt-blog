<template>
  <v-row>
    <v-col v-for="item in list" :key="item.title" md="4">
      <post :post="item" />
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
