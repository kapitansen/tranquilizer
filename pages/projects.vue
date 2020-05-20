<template>
  <v-container v-shortkey="{new: ['ctrl', 'n'], more: ['ctrl', 'shift', 'n'], submit: ['ctrl', 'enter'], search: ['ctrl', 's']}" class="mt-4" @shortkey="shortkeys">
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-toolbar color="blue">
            <v-toolbar-title v-if="!searchMode">
              Projects
            </v-toolbar-title>
            <v-spacer />
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                  @click="addingNewProject=!addingNewProject"
                >
                  <v-icon>{{ addingNewProject ? "mdi-close" : "mdi-plus" }}</v-icon>
                </v-btn>
              </template>
              <span>{{ addingNewProject ? "Cancel" : "Add new task (Ctrl+N)" }}</span>
            </v-tooltip>
          </v-toolbar>
          <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" />
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="subItem in item.items"
                :key="subItem.title"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      addingNewProject: false,
      items: [
        {
          action: 'local_activity',
          title: 'Attractions',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'restaurant',
          title: 'Dining',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        },
        {
          action: 'school',
          title: 'Education',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'directions_run',
          title: 'Family',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'healing',
          title: 'Health',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'content_cut',
          title: 'Office',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'local_offer',
          title: 'Promotions',
          items: [
            { title: 'List Item' }
          ]
        }
      ]
    }
  }
}
</script>
