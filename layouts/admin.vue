<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-toolbar-title>
        <v-btn text nuxt to="/admin">
          <v-icon left>
            mdi-account-cog
          </v-icon> Admin
        </v-btn>
      </v-toolbar-title>
    </v-app-bar>
    <v-content
      fluid
    >
      <v-container
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {

}
</script>
