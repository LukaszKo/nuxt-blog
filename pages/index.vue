<template>
  <v-layout column justify-center align-center>
    <v-row>
      <v-col cols="12">
        <v-row class="">
          <v-card
            v-for="n in 12"
            :key="n"
            class="ma-4 pa-6 mx-auto"
            max-width="350"
            raised=""
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.aniagotuje.com/pictures/articles/2020/04/3451818-v-1080x1080.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Share
              </v-btn>

              <v-btn color="orange" text>
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  }
}
</script>
