<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped expand-on-hover>
      <v-list dense>
        <v-list-item link nuxt to="/dashboard">
          <v-list-item-action>
            <v-icon>mdi-book-open-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link nuxt to="/projects">
          <v-list-item-action>
            <v-icon>mdi-clipboard-text</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link nuxt to="/tasks">
          <v-list-item-action>
            <v-icon>mdi-checkbox-marked-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Tasks</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link nuxt to="/settings">
          <v-list-item-action>
            <v-icon>mdi-cog-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dense>
      <logo size="24px" style="position: relative; top: -1px; margin-right: 8px;" /><v-toolbar-title class="tr_name">
        tranquilizer
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  // props: {
  //   source: String,
  // },
  components: {
    Logo
  },
  data: () => ({
    drawer: null
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}

</script>

<style>

</style>
