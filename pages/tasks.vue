<template>
  <v-container v-shortkey="{new: ['ctrl', 'n'], more: ['ctrl', 'shift', 'n'], submit: ['ctrl', 'enter'], search: ['ctrl', 's']}" class="mt-4" @shortkey="shortkeys">
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-toolbar color="blue">
            <v-toolbar-title v-if="!searchMode">
              Planned Tasks ({{ undoneTasks.length }})
            </v-toolbar-title>
            <v-text-field
              v-if="searchMode"
              v-model="searchKey"
              class="searchTask"
              dense
              placeholder="Enter full or part task name"
              outlined
              :autofocus="searchTask"
              background-color="#272727"
              clearable
              @click:clear="resetSearch"
              @keydown.esc="resetSearch"
              @keydown.enter="searchTask(searchKey)"
            />
            <v-spacer v-if="!searchMode" />
            <v-tooltip v-if="!searchMode" top>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                  @click="searchMode=!searchMode"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>
              <span>Search task by name (Ctrl+S)</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                  @click="addingNewTask=!addingNewTask"
                >
                  <v-icon>{{ addingNewTask ? "mdi-close" : "mdi-plus" }}</v-icon>
                </v-btn>
              </template>
              <span>{{ addingNewTask ? "Cancel" : "Add new task (Ctrl+N)" }}</span>
            </v-tooltip>
          </v-toolbar>

          <v-list two-line>
            <v-list-item-group multiple active-class="light--text">
              <template v-for="(item, index) in localTasks">
                <v-list-item :key="item.id">
                  <template v-slot:default="{ active }">
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title" />
                      <v-list-item-subtitle class="text--primary" v-text="item.subtitle" />
                      <v-list-item-subtitle v-text="item.descr" />
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text v-text="item.time" />
                      <v-icon v-if="!active" color="grey lighten-1">
                        mdi-star-outline
                      </v-icon>

                      <v-icon v-else color="yellow">
                        mdi-star
                      </v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>

                <v-divider v-if="index + 1 < localTasks.length" :key="'divider'+index" />
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6">
        <div v-if="addingNewTask">
          <v-text-field
            v-model="newTask.title"
            label="New task title"
            outlined
            :autofocus="addingNewTask"
            @keydown.enter="addTask(newTask)"
          >
            <v-tooltip slot="append" top>
              <template v-slot:activator="{ on }">
                <v-icon
                  color="primary"
                  dark
                  v-on="on"
                  @click="addingNewTaskMore = !addingNewTaskMore"
                >
                  {{ addingNewTaskMore ? "mdi-archive-arrow-up-outline" : "mdi-archive-arrow-down-outline" }}
                </v-icon>
              </template>
              <span>Advanced options (Ctrl+Shift+N)</span>
            </v-tooltip>
          </v-text-field>
          <v-card v-if="addingNewTaskMore" outlined>
            <v-card-text>
              <v-text-field
                v-model="newTask.subtitle"
                label="Subtitle"
                outlined
              />
              <v-text-field
                v-model="newTask.time"
                label="Time to complete"
                outlined
              />
              <v-textarea v-model="newTask.descr" label="Description" outlined />
              <v-select
                v-model="newTask.users"
                :items="users"
                item-value="id"
                item-text="name"
                label="User"
                outlined
                chips
                small-chips
                deletable-chips
                hide-selected
                multiple
              />
              <v-card-actions class="justify-center">
                <v-btn
                  outlined
                  large
                  color="success"
                  class="px-4"
                  @click="addTask(newTask)"
                >
                  Add task <br>
                  <span class="text-lowercase font-weight-light caption">(or press Ctrl+Enter)</span>
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data: () => ({
    addingNewTask: false,
    addingNewTaskMore: false,
    searchMode: false,
    searchKey: '',
    newTask: {}
  }),
  computed: {
    localTasks () {
      return this.$store.state.tasks
    },
    users () {
      return this.$store.state.users
    },
    ...mapGetters(['doneTasks', 'undoneTasks', 'filterTasksByName'])
  },
  watch: {
    addingNewTaskMore (val) {
      if (val) {
        this.addingNewTask = true
        this.newTask.users = [1]
      }
    }
  },
  methods: {
    resetSearch () {
      this.searchMode = false
      this.searchKey = ''
    },
    searchTask (searchKey) {
      this.localTasks = filterTasksByName(searchKey)
    },
    shortkeys (event) {
      switch (event.srcKey) {
        case 'new':
          this.addingNewTask = true
          break
        case 'search':
          this.searchMode = true
          break
        case 'more':
          this.addingNewTaskMore = true
          break
        case 'submit':
          this.addTask(this.newTask)
          break
      }
    },
    ...mapMutations(['addTask']),
    ...mapActions([
      // 'addTask'
      // проксирует `this.incrementBy(amount)` в `this.$store.dispatch('incrementBy', amount)`
      // (title, subtitle, users, descr, time)
    ])
  }
}
</script>
