<template>
  <v-layout column justify-center align-center>
    <v-row>
      <v-col cols="12">
        <v-row class>
          <v-card
            v-for="(ingredient, index) in ingredients"
            :key="ingredient.title + index"
            class="ma-4 pa-6 mx-auto"
            max-width="350"
            raised
          >
            <v-img class="white--text align-end" height="200px" :src="ingredient.image">
              <v-card-title>{{ ingredient.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              {{ ingredient.type }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              {{ ingredient.instructions }}
            </v-card-text>

            <v-card-text class="text--primary">
              <div v-for="item in ingredient.ingredients" :key="item">
                {{ item }}
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  async fetch () {
    const { data } = await axios.get('.netlify/functions/recipes')
    this.ingredients = data
  },
  data () {
    return {
      ingredients: []
    }
  },
  fetchOnServer: false
}
</script>
