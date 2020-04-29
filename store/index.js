import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = () => new Vuex.Store({
  state: {
    nextTaskID: 4,
    users: [
      {
        id: 1,
        name: 'me'
      },
      {
        id: 2,
        name: 'Ann'
      }
    ],
    tasks: [
      {
        id: 1,
        title: 'Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        users: [1, 2],
        done: false,
        time: '18hr',
        descr: 'lalala lalala'
      },
      {
        id: 2,
        title: 'Buy milk',
        subtitle: 'Caution: do not stop and talk with neighbors!',
        users: [1],
        done: false,
        time: '1hr',
        descr: 'lalala2 lalala2'
      },
      {
        id: 3,
        title: 'Fix my phone',
        subtitle: 'It rings too loud',
        users: [2],
        done: false,
        time: '3hr',
        descr: 'and I can\'t sleep'
      }]
  },
  getters: {
    doneTasks: (state) => {
      return state.tasks.filter((task) => {
        return task.done
      })
    },
    undoneTasks: (state) => {
      return state.tasks.filter((task) => {
        return !task.done
      })
    }
  },
  mutations: {
    // addTask: (title, subtitle, users, descr, time) => {
    // TODO: вот тут можно будет прогнать пришедшие данные через шаблон и вставить пустые строки (если это вообще не делается автоматически при деструктуризации)
    // типа : newTask = new TaskTpl();
    // { newTask } = incomingTask;
    //   this.state.tasks.push({
    //     id: this.nextTaskID++,
    //     title,
    //     subtitle,
    //     users,
    //     done: false,
    //     time,
    //     descr
    //   })
    // }
    addTask: (state, newTask) => {
      state.tasks.push({
        id: state.nextTaskID++,
        ...newTask
      })
    }
  },
  actions: {
    // addTask ({
    //   commit
    // }) {
    //   commit('addTask')
    // }
  },
  strict: debug
})

export default store
