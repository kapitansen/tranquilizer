<template>
  <v-container class="mt-4">
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-toolbar
            color="blue"
            dark
          >
            <v-toolbar-title>Planned Tasks</v-toolbar-title>

            <v-spacer />

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line>
            <v-list-item-group
              v-model="selected"
              multiple
              active-class="light--text"
            >
              <template v-for="(item, index) in tasks">
                <v-list-item :key="item.title">
                  <template v-slot:default="{ active }">
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title" />
                      <v-list-item-subtitle class="text--primary" v-text="item.headline" />
                      <v-list-item-subtitle v-text="item.subtitle" />
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text v-text="item.time" />
                      <v-icon
                        v-if="!active"
                        color="grey lighten-1"
                      >
                        mdi-star-outline
                      </v-icon>

                      <v-icon
                        v-else
                        color="yellow"
                      >
                        mdi-star
                      </v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index + 1 < tasks.length"
                  :key="index"
                />
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="task"
          label="What are you working on?"
          solo
          @keydown.enter="create"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selected: [2],
    tasks: [
      {
        time: '15 min',
        title: 'Brunch this weekend?',
        headline: 'Ali Connors',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        done: false
      },
      {
        time: '2 hr',
        title: 'Summer BBQ',
        headline: 'me, Scrott, Jennifer',
        subtitle: "Wish I could come, but I'm out of town this weekend.",
        done: false
      },
      {
        time: '6 hr',
        title: 'Oui oui',
        headline: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        done: false
      },
      {
        time: '12 hr',
        title: 'Birthday gift',
        headline: 'Trevor Hansen',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        done: false
      },
      {
        time: '18hr',
        title: 'Recipe to try',
        headline: 'Britta Holt',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        done: false
      }
    ],
    task: null
  }),
  methods: {
    create () {
      this.tasks.push({
        time: '10min',
        done: false,
        title: this.task,
        headline: 'me'
      })

      this.task = null
    }
  }
}
</script>
