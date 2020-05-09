<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item v-for="(item, index) in menu" :key="index" nuxt :to="item.link">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link to="/">
          My Blog
        </nuxt-link>
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
      drawer: true,
      fixed: false,
      menu: [
        {
          icon: 'mdi-account',
          title: 'About',
          link: '/about'
        },
        {
          icon: 'mdi-file-document',
          title: 'Posts',
          link: '/posts'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'My Blog'
    }
  }
}
</script>
<style lang="scss" scoped>
#main {
  background-color: #f5f5f5;
}
</style>
