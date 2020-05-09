<template>
  <div>
    <v-row>
      <v-col>
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          />
        </v-carousel>
      </v-col>
    </v-row>
    <PostList :list="latestPosts" />
  </div>
</template>

<script>
import PostList from '~/components/PostList'

export default {
  components: { PostList },
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]

    }
  },
  computed: {
    latestPosts () {
      return this.$store.getters.latestPosts
    }
  },
  fetchOnServer: false
}
</script>
