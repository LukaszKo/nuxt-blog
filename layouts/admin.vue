<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-toolbar-title>
        <v-btn text nuxt to="/">
          <v-icon left>
            mdi-home
          </v-icon> My Blog
        </v-btn>
        <v-btn text nuxt to="/admin">
          <v-icon left>
            mdi-account-cog
          </v-icon> Admin
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-btn v-if="isAuthenticated" color="warning" class="ml-3" @click="logout">
        <v-icon left>
          mdi-logout
        </v-icon> Logout
      </v-btn>
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
  computed: {
    headerText () {
      return this.$store.getters['core/isAuthenticated'] ? 'Sign up' : 'Sign in'
    },
    isAuthenticated () {
      return this.$store.getters['core/isAuthenticated']
    }
  },

  methods: {
    logout () {
      this.$store.dispatch('core/logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>
