<template>
  <v-app>
    <v-app-bar fixed app color="deep-orange lighten-1" dark>
      <v-toolbar-title class="d-none d-sm-flex" v-text="title" />
      <v-spacer />
      <v-text-field
        :append-icon-cb="() => {}"
        placeholder="Szukaj..."
        single-line
        append-icon="mdi-magnify"
        color="white"
        hide-details
      />
      <v-spacer />
      <v-btn class="ma-2 d-none d-sm-flex" color="" nuxt to="/new">
        Dodaj
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
      <v-btn small fab class="ma-2 d-flex d-sm-none" color="">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-content id="main">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Przepisy'
    }
  }
}
</script>
<style lang="scss" scoped>
#main {
  background-color: #f5f5f5;
}
</style>
