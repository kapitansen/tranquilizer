<template>
  <v-container class="mt-4">
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-toolbar>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-card outlined>
                  <v-card-title>
                    UI Settings
                  </v-card-title>
                  <v-card-text class="pb-0">
                    <v-switch
                      v-model="localSettings.themeDark"
                      label="Dark Mode"
                      color="success"
                      class="mt-0"
                      dense
                      inset
                      @change="settingsChanged=true"
                    />
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card outlined>
                  <v-card-title>
                    Modules
                  </v-card-title>
                  <v-card-text class="pb-0">
                    <v-switch
                      v-model="localSettings.projectsOn"
                      label="Projects"
                      color="info"
                      class="mt-0"
                      dense
                      inset
                      @change="settingsChanged=true"
                    />
                    <v-switch
                      v-model="localSettings.dashboardOn"
                      label="Dashboard"
                      color="info"
                      class="mt-0"
                      dense
                      inset
                      @change="settingsChanged=true"
                    />
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    settingsChanged: false
  }),
  computed: {
    localSettings () {
      return JSON.parse(JSON.stringify(this.$store.state.settings))
    }
  },
  watch: {
    settingsChanged () {
      this.changeSettings(this.localSettings)
      this.settingsChanged = false
    }
  },
  methods: {
    ...mapMutations(['changeSettings'])
  }
}
</script>
